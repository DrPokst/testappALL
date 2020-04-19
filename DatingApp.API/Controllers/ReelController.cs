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
    public class ReelController : ControllerBase
    {   
        
        private readonly IReelRepository _repo;
        private readonly IMapper _mapper;
        public ReelController(IReelRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }
        
        [HttpGet]
        public async Task<IActionResult> GetReels()
        {
            var reels = await _repo.GetReels();
            var reelsToReturn= _mapper.Map<IEnumerable<ReelsForListDto>>(reels);

            return Ok(reelsToReturn);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetReel(int id)
        {
            var reel = await _repo.GetReel(id);
            var reelToReturn= _mapper.Map<ReelsForListDto>(reel);

            return Ok(reelToReturn);
        }
        
    }
}