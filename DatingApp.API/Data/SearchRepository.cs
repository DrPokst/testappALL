using System.Collections.Generic;
using System.Threading.Tasks;
using DatingApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Data
{
    public class SearchRepository : ISearchRepository
    {
        private DataContext _context;

        public SearchRepository(DataContext context)
        {
            _context = context;
        }
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<Componentas> GetComponents(int id)
        {
            var componentass = await _context.Componentass.Include(p => p.Photos).FirstOrDefaultAsync(u => u.Id == id);

            return componentass;
        }

        public async Task<IEnumerable<Componentas>> GetComponents()
        {
            var componentass = await _context.Componentass.Include(p => p.Photos).ToListAsync();
           
            return componentass;
        }

        public async Task<Componentas> RegisterComponents(Componentas componentas)
        {   
            
            await _context.Componentass.AddAsync(componentas);
            await _context.SaveChangesAsync();

            return componentas;

        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<bool> MnFExists(string Mnf)
        {
            
           if (await _context.Componentass.AnyAsync(x => x.Mnf == Mnf))
            return true;
            
            return false;
        }

       
        
    }
}