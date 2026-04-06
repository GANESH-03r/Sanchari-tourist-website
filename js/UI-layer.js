

  export function renderDestinations(filteredDestinations, elements) {
      const { destGrid, noResults } = elements;
      // {
      // const destGrid = document.getElementById('dest-grid');
      // const noResults = document.getElementById("no-results");
     const filtered = filteredDestinations;
    
      if(filtered.length ===0)
      {
        noResults.style.display = "block";  
        document.getElementById('results-count').textContent = `0 destination`;
        return;
      }
      else{
        noResults.style.display = "none";
      }
      document.getElementById('results-count').textContent = `${filtered.length} destinations`;
        destGrid.innerHTML = '';
      filtered.forEach(dest => {
        const card = document.createElement('div');
        card.className = 'dest-card';
        card.innerHTML = `
          <div class="dest-card-img">
            <img src="${dest.image}" alt="${dest.name}" />
            <div class="dest-badge">${dest.category}</div>
            <div class="dest-rating"> ${dest.rating}</div>
          </div>
          <div class="dest-card-body">
            <h3>${dest.name}</h3>
            <div class="dest-location">📍 ${dest.location}, ${dest.state}</div>
            <p class="dest-desc">${dest.desc}</p>
            <div class="dest-card-footer">
              <div class="dest-price">₹${dest.price} <span>/ person</span></div>
              <button class="view-btn" onclick="viewDestination(${dest.id})">View Details</button>
            </div>
          </div>
        `;
        destGrid.appendChild(card);
      });
    }
        // ----FILTER BUTTONS--------------------
      export function filterButtons(filterButtonCheck) 
      { 
          const buttons = document.querySelectorAll('.filter-btn');
          buttons.forEach(button => {
            button.addEventListener('click', () => {
              const category = button.dataset.filter;
              // Update active button styling
              buttons.forEach(btn => btn.classList.remove('active'));
              button.classList.add('active');
              // Re-render destinations based on new filter
              filterButtonCheck(category);
           }); 
        });
      }
      // ----SEARCH FUNCTIONALITY--------------------
      export function searchRender(searchDestinations){
        const searchInput = document.getElementById('search-input');  
        searchInput.addEventListener('input', (e) => {
          const query = e.target.value.trim().toLowerCase();
          searchDestinations(query);
        });
      }
   
