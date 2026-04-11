import { fetchJSONData } from "./server-data.js";
import { renderDestinations } from "./UI-layer.js";
import { filterButtons, searchRender } from "./UI-layer.js";

     const state = {
        destinations : [],
        activeState : "",
        activeCategory : "all",
        searchQuery : "",
    }
    const elements = {
      destGrid: document.getElementById('dest-grid'),
      noResults: document.getElementById("no-results"),
      stateBanner: document.getElementById("state-banner"),
      stateBannerText: document.getElementById("state-banner-text"),
      sectionLabel: document.querySelector('.section-label'),
      searchInput: document.getElementById('search-input'),
      clearStateBtn: document.getElementById('clear-state-btn')
       
    };
    //  initialization function
   async function init(url) { 
    state.destinations = await fetchJSONData(url);
      const param = new URLSearchParams(window.location.search);
      state.activeState = param.get("state") || "";
      if(state.activeState){
        elements.stateBanner.classList.add("show");
        elements.stateBannerText.textContent = `Founded ${state.destinations
        .filter(dest => dest.state === state.activeState).length} places in ${state.activeState}`;
        elements.sectionLabel.textContent = `All places in ${state.activeState}`;
        elements.searchInput.value = state.activeState;
        state.searchQuery = state.activeState.toLowerCase();}

    console.log("Fetched Data:", state.destinations); // Debug log
    // filterButtons(state.destinations); 
    updateUI();
    filterButtons(filterButtonCheck);
    searchRender(searchDestinations);
    ClearStateFilter();
  }
  // Centralized filter button handler
   function filterButtonCheck(data){
      state.activeCategory = data;
      updateUI(state.destinations, state, elements);
  }
  // Centralized search function
   function searchDestinations(query){
      state.searchQuery = query;
      updateUI(state.destinations, state, elements);
    }
  // document.addEventListener('DOMContentLoaded', () => {
    
// Centralized filtering function
  function filterDestinations(state) {
        const filteredDestinations = state.destinations.filter(dest => {
        const matchesState = state.activeState === "" || dest.state === state.activeState;
        const matchesCategory = state.activeCategory ==="all"|| dest.category === state.activeCategory;
        const matchesSearch = dest.name.toLowerCase().includes(state.searchQuery.toLowerCase())|| dest.state.toLowerCase()
        .includes(state.searchQuery.toLowerCase())|| dest.desc.toLowerCase().includes(state.searchQuery.toLowerCase());
        return matchesState && matchesCategory && matchesSearch;
        });
        return filteredDestinations;
  }
 
  // Centralized UI update function
   
  function updateUI() {
      const filteredDestinations = filterDestinations(state)
        renderDestinations(filteredDestinations, elements);
  }
  function ClearStateFilter(){
    elements.clearStateBtn.addEventListener("click", () => {
      state.activeState = "";
      elements.stateBanner.classList.remove("show");
      elements.stateBannerText.textContent = "";
      elements.sectionLabel.textContent = "All Destinations";
      elements.searchInput.value = "";
      state.searchQuery = "";
      updateUI(state.destinations, state, elements);
    });
  }
   init("../data/destinations.json");
   //});
