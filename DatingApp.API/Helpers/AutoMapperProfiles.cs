using System.Linq;
using AutoMapper;
using DatingApp.API.DTOs;
using DatingApp.API.Models;

namespace DatingApp.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Componentas, ComponetsForListDto>()
                .ForMember(dest => dest.PhotoUrl, opt => opt.MapFrom(s => s.Photos.FirstOrDefault(p => p.IsMain).Url));
            CreateMap<Photo, PhotosForDto>();
            CreateMap<ComponentForUpdateDto, Componentas>();
            CreateMap<LocationForRegisterDto, Reel>();
            CreateMap<Reel, ReelsForListDto>()
                .ForMember(dest => dest.PhotoUrl2, opt => opt.MapFrom(s => s.Photos2.FirstOrDefault(p => p.IsMain).Url));
            CreateMap<Photo, PhotosForReturnDto>();
            CreateMap<PhotosForCreationDto, Photo>();
        }
    }
} 