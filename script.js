// MENU MOBILE
const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");

    menuBtn.textContent = nav.classList.contains("active")
        ? "✕"
        : "☰";
});

// FECHAR MENU AO CLICAR EM UM LINK
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        menuBtn.textContent = "☰";
    });
});

// BOTÃO DE FILTRO
const filterBtn = document.getElementById("filterBtn");

let showingAll = false;

filterBtn.addEventListener("click", () => {
    showingAll = !showingAll;

    if (showingAll) {
        filterBtn.textContent = "✓ Todos selecionados";
        filterBtn.style.color = "#0b8f52";
    } else {
        filterBtn.textContent = "Todos os jogos";
        filterBtn.style.color = "#101713";
    }
});

// BOTÕES DE DETALHES
const detailsButtons = document.querySelectorAll(".details");

detailsButtons.forEach(button => {
    button.addEventListener("click", () => {
        const originalText = button.textContent;

        button.textContent = "✓ Jogo selecionado";
        button.style.color = "#16c172";

        setTimeout(() => {
            button.textContent = originalText;
        }, 1800);
    });
});

// ANIMAÇÃO SIMPLES AO ROLAR A PÁGINA
const cards = document.querySelectorAll(
    ".game-card, .news-card"
);

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    },
    {
        threshold: 0.1
    }
);

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity .5s ease, transform .5s ease";

    observer.observe(card);
});

// ANO AUTOMÁTICO NO CONSOLE
console.log("⚽ Futebol Hub carregado com sucesso!");