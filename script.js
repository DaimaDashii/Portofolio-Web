document.addEventListener('DOMContentLoaded', function() {
    const skills = document.querySelectorAll('span');
    
    skills.forEach(skill => {
        skill.addEventListener('click', function() {
            const skillLevel = this.getAttribute('data-skill');
            alert(`Skill Level: ${skillLevel}`);
            
            function redirectToWebsite() {
            window.location.href = "https://wa.me/6288901142011?text=Let's-work-together-on-website-project;";
        });
    });
});