export function loadLists() {
  return [
    { 
      title: 'Tarefas', 
      creatable: true,
      cards: [
        {
          id: 1,
          content: 'NodeJS',
          labels: ['#7159c1'],
          user: 'http://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png'
        },
        {
          id: 2,
          content: 'Recriar a interface do Pipefy',
          labels: ['#7159c1'],
          user: 'http://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png'
        },
        {
          id: 3,
          content: 'React Native',
          labels: ['#7159c1'],
          user: 'http://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png'
        },
        {
          id: 4,
          content: '"NextJS: Utilizando server-side rendering com ReactJS"',
          labels: ['#54e1f7'],
          user: 'http://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png'
        },
        {
          id: 5,
          content: 'Testes e deploy ReactJS',
          labels: ['#54e1f7'],
          user: 'http://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png'
        },
      ]
    },
    { 
      title: 'Fazendo', 
      creatable: false,
      cards: [
        {
          id: 6,
          content: 'Recriando clone do Pipefy',
          labels: [],
          user: 'http://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png'
        }
      ]
    },
    { 
      title: 'Pausado', 
      creatable: false,
      cards: [
        {
          id: 7,
          content: 'Geolocalização e mapas com React Native',
          labels: ['#7159c1'],
          user: 'http://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png'
        },
        {
          id: 8,
          content: 'Gravar testes e deploy ReactJS',
          labels: ['#54e1f7'],
          user: 'http://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png'
        },
        {
          id: 9,
          content: 'Ajustes na biblioteca unform',
          labels: [],
        }
      ]
    },
    { 
      title: 'Concluído', 
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: 'Deploy e CI com React Native',
          labels: [],
        },
        {
          id: 12,
          content: 'Teste e deploy React',
          labels: ['#54e1f7'],
        },
        {
          id: 13,
          content: 'Internacionalização de aplicações Node.js, ReactJS e React Native"',
          labels: ['#7159c1'],
        }
      ]
    },
  ];
}