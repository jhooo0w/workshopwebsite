function enviarParaWhatsApp(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;

    const mensagem = `Olá! Quero me inscrever no Workshop de Criação de Sites.%0A%0A*Nome:* ${nome}%0A*Idade:* ${idade}`;

    // Número do WhatsApp com DDD, sem traços ou espaços
    const numeroWhatsApp = "5511981694671";

    window.open(`https://wa.me/${numeroWhatsApp}?text=${mensagem}`, "_blank");
}

// script.js
const questions = [
    {
      question: "Preciso ter conhecimento em programação para participar?",
      answer:
        "Não! O workshop foi pensado para iniciantes. Vamos te guiar do zero até ter seu próprio site no ar."
    },
    {
      question: "Vou conseguir criar um site mesmo sem experiência?",
      answer:
        "Sim! O conteúdo é passo a passo e prático. Ao final do workshop, você terá um site funcional para seu negócio."
    },
    {
      question: "O site que eu criar poderá ser usado profissionalmente?",
      answer:
        "Com certeza! O site será seu, e você poderá usá-lo para divulgar seus produtos ou serviços online."
    },
    {
      question: "Vou aprender a personalizar o site com a identidade do meu negócio?",
      answer:
        "Sim! Durante o workshop, você aprenderá a adaptar o site com cores, textos e imagens do seu próprio negócio."
    },
    {
      question: "O workshop é gratuito?",
      answer:
        "Sim! O evento é totalmente gratuito para alunos e não alunos Microlins."
    }
  ];
  
  const faqContainer = document.getElementById("faqContainer");
  
  questions.forEach((item, index) => {
    const faqItem = document.createElement("div");
    faqItem.classList.add("question-item");
  
    faqItem.innerHTML = `
      <div class="question-title" onclick="toggleAnswer(${index})">
        <h3>${item.question}</h3>
        <span class="toggle-icon" id="icon-${index}">+</span>
      </div>
      <div class="question-answer" id="answer-${index}">
        <p>${item.answer}</p>
      </div>
    `;
  
    faqContainer.appendChild(faqItem);
  });
  
  let openIndex = null;
  
  function toggleAnswer(index) {
    const answer = document.getElementById(`answer-${index}`);
    const icon = document.getElementById(`icon-${index}`);
  
    if (openIndex !== null && openIndex !== index) {
      // Fecha anterior
      document.getElementById(`answer-${openIndex}`).style.maxHeight = "0px";
      document.getElementById(`answer-${openIndex}`).style.opacity = "0";
      document.getElementById(`icon-${openIndex}`).textContent = "+";
    }
  
    if (openIndex === index) {
      // Fecha atual
      answer.style.maxHeight = "0px";
      answer.style.opacity = "0";
      icon.textContent = "+";
      openIndex = null;
    } else {
      // Abre nova
      answer.style.maxHeight = "500px";
      answer.style.opacity = "1";
      icon.textContent = "−";
      openIndex = index;
    }
  }
  
  function voltarAoTopo() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  