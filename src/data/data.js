export const data = [   
  {
    min: 0,
    max: 18.4,
    classification: "Menor que 18,5",
    info: "Magreza",
    obesity: "0",
    infoClass:"medium",
    warning:"Seu IMC indica magreza. Uma avaliação profissional pode ajudar a identificar possíveis causas e orientar estratégias para alcançar um peso adequado."
  },
  {
    min: 18.5,
    max: 24.9,
    classification: "Entre 18,5 e 24,9",
    info: "Normal",
    obesity: "0",
    infoClass:"good",
    warning:"Seu IMC está dentro da faixa considerada saudável. Continue mantendo hábitos equilibrados e acompanhamento regular da sua saúde."
  },
  {
    min: 25,
    max: 29.9,
    classification: "Entre 25,0 e 29,9",
    info: "Sobrepeso",
    obesity: "I",
    infoClass:"low",
    warning:"Seu IMC indica sobrepeso. Pequenas mudanças nos hábitos alimentares e na prática de atividades físicas podem contribuir para uma melhor qualidade de vida."
  },
  {
    min: 30,
    max: 39.9,
    classification: "Entre 30,0 e 39,9",
    info: "Obesidade",
    obesity: "II",
    infoClass:"medium",
    warning:"Seu IMC indica obesidade. É recomendado acompanhamento profissional para orientação adequada sobre saúde, alimentação e atividade física." 
  },
  {
    min: 40,
    max: 999,
    classification: "Maior que 40,0",
    info: "Obesidade grave",
    obesity: "III",
    infoClass:"high",
    warning:"Seu IMC indica obesidade grave. Procure avaliação médica para acompanhamento especializado e definição das melhores estratégias de cuidado."
  },
];