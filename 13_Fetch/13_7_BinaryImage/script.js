async function fetchImage() {
    const url = "https://plus.unsplash.com/premium_photo-1734543932716-431337d9c3c4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const response = await fetch(url);
    const blob = await response.blob();
    console.log(blob);
    
    const image = document.getElementById("result");
    image.src = URL.createObjectURL(blob);
}

fetchImage();