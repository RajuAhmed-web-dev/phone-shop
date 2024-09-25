
const allPhones = async (searchText) => {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    );
    const data = await res.json();
    displayData(data.data);
  };
  
  allPhones('a')
  
  
  const displayData = (mobilesInfo) => {
    const phoneCardContainer = document.getElementById("phone-card-container");
  
    phoneCardContainer.innerText = ''
  
    mobilesInfo.slice(0,9).forEach((mobileInfo) => {
      
      const div = document.createElement("div");
      div.innerHTML = `
          <div class="card bg-base-100 max-w-[364px] border-[1px] border-[#CFCFCF]">
              <figure class="mt-12">
                <img
                  src="${mobileInfo.image}"
                  alt="Shoes"
                  class="rounded-xl" />
              </figure>
              <div class="card-body items-center text-center mt-[25px]">
                <h2 class="card-title text-[#403F3F] text-[25px] font-bold mb-5">${mobileInfo.phone_name}</h2>
                <p class="text-lg font-normal leading-[30px]">There are many variations of passages of available, but the majority have suffered</p>
                 <h2 class="card-title text-[25px] font-bold text-[#403F3F] mt-2 mb-4"> $999</h2>
                <div class="card-actions">
                  <button class="px-[25px] py-[9px] rounded-lg bg-[#0D6EFD] text-[#ffff]">Show Details</button>
                </div>
              </div>
            </div>
  `;
      phoneCardContainer.appendChild(div);
    });
  };
  
  const searchImplement = () =>{
      const searchInput = document.getElementById('search-input')
      const searchText = searchInput.value    
      allPhones(searchText)
  }


