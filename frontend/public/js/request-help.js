document.getElementById("helpForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("fullName").value.trim();
    const contact = document.getElementById("contact").value.trim();
    const type = document.getElementById("helpType").value.trim();
  
    if (name && contact && type) {
      document.getElementById("helpForm").reset();
      const msg = document.getElementById("responseMessage");
      msg.classList.remove("hidden");
      
      setTimeout(() => {
        msg.classList.add("hidden");
      }, 5000);
    }
  });
  