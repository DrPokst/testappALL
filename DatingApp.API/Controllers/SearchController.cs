using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using DatingApp.API.Data;
using DatingApp.API.DTOs;
using DatingApp.API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DatingApp.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class SearchController : ControllerBase
    {
        private readonly ISearchRepository _repo;
        private readonly IMapper _mapper;
        public SearchController(ISearchRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;

        }

        [HttpGet]
        public async Task<IActionResult> GetComponents()
        {
            var components = await _repo.GetComponents();
            var componentsToReturn= _mapper.Map<IEnumerable<ComponetsForListDto>>(components);

            return Ok(componentsToReturn);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetComponents(int id)
        {
            var components = await _repo.GetComponents(id);
            var componentsToReturn= _mapper.Map<ComponetsForListDto>(components);

            return Ok(componentsToReturn);
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateComponent(int id, ComponentForUpdateDto componentForUpdateDto)
        {
           // if (id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
           //     return Unauthorized();

            var componentsFromRepo = await _repo.GetComponents(id);

            _mapper.Map(componentForUpdateDto, componentsFromRepo);

            if (await _repo.SaveAll())
                return NoContent();
            
            throw new Exception($"Updating user {id} failed on save");
        }
         [HttpPost("registercomponent")]
        public async Task<IActionResult> RegisterComponent(ComponetsForRegisterDto ComponetsForRegisterDto)
        {
            return StatusCode(201);
            if (await _repo.MnFExists(ComponetsForRegisterDto.Mnf))
                return BadRequest("Mnf already taken");

            var ComponentasToCreate = new Componentas
            {
                Id = ComponetsForRegisterDto.Id,
                Mnf = ComponetsForRegisterDto.Mnf,
                Size = ComponetsForRegisterDto.Size,
                Nominal = ComponetsForRegisterDto.Nominal,
                Type = ComponetsForRegisterDto.Type,
            };
            //var createComponent = await _repo.RegisterComponent(ComponentasToCreate);

            //var createUser = await _repo.Register(MnfToCreate, ComponetsForRegisterDto.Password);

            return StatusCode(201);
        }


    }
}