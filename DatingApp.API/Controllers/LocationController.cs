using System;
using System.Threading.Tasks;
using AutoMapper;
using DatingApp.API.Data;
using DatingApp.API.DTOs;
using DatingApp.API.Models;
using Microsoft.AspNetCore.Mvc;

namespace DatingApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LocationController : ControllerBase
    {
         private readonly IReelRepository _repo;
        private readonly ISearchRepository _srepo;
        private readonly IMapper _mapper;
        public LocationController(IReelRepository repo, ISearchRepository srepo, IMapper mapper)
        {
            _srepo = srepo;
            _mapper = mapper;
            _repo = repo;
        }

        [HttpPost("put")]
        public async Task<IActionResult> RegisterLocation(LocationForRegisterDto LocationForRegisterDto)
        {

            var ReelsFromRepo = await _repo.GetReel(LocationForRegisterDto.Id);

            _mapper.Map(LocationForRegisterDto, ReelsFromRepo);

            if (await _repo.SaveAll())
                return NoContent();
            
            else 
             return BadRequest("Could notregister location");
        }

        
    }
}