import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: true,
        fallbackLng: 'pt-br',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: {
                    navbar: {
                        home: 'Home',
                        aboutUs: 'The Couple',
                        loveStory: 'Love Story',
                        photos: 'Photos',
                        event: 'Venue',
                        rsvp: 'RSVP'
                    },
                    banner: {
                        title: 'Mariana and Davi'
                    },
                    countdown: {
                        title: 'Countdown to the wedding ceremony',
                        months: 'months',
                        days: 'days',
                        hours: 'hours',
                        minutes: 'minutes',
                        seconds: 'seconds'
                    },
                    aboutUs: {
                        title: 'The Couple',
                        bride: {
                            title: 'Mariana Lima',
                            subtitle: 'the bride'
                        },
                        groom: {
                            title: 'Davi Kawasaki',
                            subtitle: 'the groom'
                        }
                    },
                    loveStory: {
                        title: 'Love Story',
                        gallery: {
                            sectionOne: {
                                text: [
                                    'In a christmas night, joking around, she said to anybody listening that the man for herself was not in brazilian land! One week later, he came back from Denmark and through destiny\'s fate, without much expectation, through a mobile app that\'s not expected to happen, the Match happened. Then it came the first, the second and many other dates. It came the friendship, the longing, the willingness to be together and, at last, the love.',
                                    'Simple like that, as we are.',
                                    'Further about our history can be seen through our beautiful text written by our friend and writer, Matheus Jardim ???'
                                ]
                            },
                            sectionTwo: {
                                title: 'When Love Enters Without Knocking at the Door',
                                text: [
                                    'This is about a love that comes as a storm in the middle of a calmness and hopping through a mess that took months to organize ???'
                                ]
                            },
                            sectionThree: {
                                text: [
                                    '"Sometimes small events seem to trigger off others that not by far would\'ve been imagined taking into perspective, but when viewed in retrospect, make as much sense as well as it\'s intended to have happened exactly how it took place. It\'s to look back and desire that no summer breeze would\'ve passed at that moment, afraid of that it\'d bring a different outcome ???'
                                ]
                            },
                            sectionFour: {
                                text: [
                                    'Life itself, is much more random than we can learn to see. The universe is big and unknown enough for her to believe that a conspiracy of energies was acting to take her to that moment. Maybe it was, but it wasn\'t, hence why she loves and nourishes huge affection in every detail, that even could be completely different, but that it was exact and perfect ???'
                                ]
                            },
                            sectionFive: {
                                text: [
                                    'She has picked up some things thrown here and there, removed the dust that accumulated on top of the books, moved away the bed, cleaned the bathrooms and the kitchen, swept the living room rug, climbed the stairs to clean the upper parts and crouched to find the most lonely crumb under the cabinets. Lifted one thing or another and reorganized the whole wardrobe. The house never been so tidy like this ???'
                                ]
                            },
                            sectionSix: {
                                text: [
                                    'Even due to that, when he arrived and messed everything up, she lost her senses. It cames as a storm in the middle of summer, strong and unexpected, and in a matter of seconds terminated months of work. She wasn\'t capable of comprehend how a newly known guy shaked her ground so much. Not even in the most marked delirium she imagined to surrender to a sudden romance, mas it seemed impossible to contain, the feeling was urgent ???'
                                ]
                            },
                            sectionSeven: {
                                text: [
                                    'It wasn\'t lack of warning, he prepared her, wanted a quick fling, had plans and soon should pass, even if the mess was still there. Winds came from another continent, e to the same continent, wanted to come back. She ran, thought about closing the doors and close every gap that could let him escape ???'
                                ]
                            },
                            sectionEight: {
                                text: [
                                    'She cried, didn\'t close anything, knew that a love couldn\'t ever be confined, but to be given wings, and if it was necessary, teach it how to love and to fly, hoping that both\'s wish would come to be the same wing-beat, side by side, towards the same destiny. Life has its sunny days, capable of in the most inopportune moment bring rain, that in such a day insisted in spoil the beautiful picnic that they have planned. But isn\'t life a sequence of random events that make sense only at the end? ???'
                                ]
                            },
                            sectionNine: {
                                text: [
                                    'Doors and windows were open, but he chose to be not a passing storm. The rain even entered through where it had to enter and afterwards it overflowed, first through her eyes, and after through his. Then they decided that the best path would be the one that they\'d trail together, or even better, that they\'d fly together. Even if they had traced a route that had been a little bit longer, they noticed that even so it\'d be the same. A little time longer would seem to be a delay to the heedless eyes, but for them, sharing this time with each other, was what it meant to make it worth every second longer ???'
                                ]
                            },
                            sectionTen: {
                                text: [
                                    'Maybe the wings\' metaphor would be the one that pleases her the most, probably by feeling the butterflies in the stomach every time that they are together. Today she looks behind and doesn\'t wish that anything would\'ve been different. She loves the coincidences that put them together. The emotions, once contained, are now shared.',
                                    'She loves him. He loves her. And together they are, beating strongly their wings to finally fly together.',
                                    'And love is like the summer sun, that wamrs and takes away the fear to face the risks and that feeds the courage to give in."'
                                ]
                            }
                        }
                    },
                    photos: {
                        title: 'Our Photos'
                    },
                    venue: {
                        title: 'Venue Location',
                        subtitle: 'Ceremony and reception',
                        when: {
                            title: 'When',
                            subtitle: '2022 July 1st, 6pm'
                        },
                        where: {
                            title: 'Where',
                            subtitle: 'Emp??rio Loft - 533 Street Para??ba - Jardim Higien??polis, Londrina - PR, 86020-090',
                            route: 'Check route'
                        }
                    },
                    rsvp: {
                        title: 'RSVP',
                        subtitle: 'We are eagerly waiting for you! RSVP through Whatsapp with our consultancy:',
                        wpp: 'https://api.whatsapp.com/send/?phone=5543999779518&text=I%27d%20like%20to%20RSVP%20at%20Mariana%27s%20and%20Davi%27s%20wedding%2E&app_absent=0'
                    },
                    support: {
                        title: 'Our gifts list',
                        list: 'List available at the website casar.com (only in Portuguese):',
                        pix: 'Gifts can be sent using pix directly through the QR code below (brazilian transfers only):',
                        international: {
                            title: 'International accounts to send gifts:'
                        }
                    },
                    footer: {
                        separator: 'and'
                    }
                }
            },
            'pt-BR': {
                translation: {
                    navbar: {
                        home: 'In??cio',
                        aboutUs: 'O Casal',
                        loveStory: 'Nosso Amor',
                        photos: 'Fotos',
                        event: 'Evento',
                        rsvp: 'Confirme sua presen??a'
                    },
                    banner: {
                        title: 'Mariana e Davi'
                    },
                    countdown: {
                        title: 'Quanto tempo at?? o grande dia?',
                        months: 'meses',
                        days: 'dias',
                        hours: 'horas',
                        minutes: 'minutos',
                        seconds: 'segundos'
                    },
                    aboutUs: {
                        title: 'O Casal',
                        bride: {
                            title: 'Mariana Lima',
                            subtitle: 'a noiva'
                        },
                        groom: {
                            title: 'Davi Kawasaki',
                            subtitle: 'o noivo'
                        }
                    },
                    loveStory: {
                        title: 'Nosso Amor',
                        gallery: {
                            sectionOne: {
                                text: [
                                    'Em uma noite de natal, no meio de uma brincadeira, ela disse para quem quisesse ouvir que o homem pra si n??o estava em terras brasileiras! Uma semana depois ele voltou da Dinamarca e por uma coincid??ncia do destino, sem muitas expectativas, por um aplicativo que n??o se espera que algo assim ocorra, o Match aconteceu. Vieram ent??o o primeiro, o segundo e muitos outros encontros. Veio a amizade, a saudade, a vontade de ficarem juntos e por fim o amor.',
                                    'Simples assim, como n??s somos.',
                                    'Mais sobre a nossa hist??ria no texto lindo escrito pelo nosso amigo escritor Matheus Jardim ???'
                                ]
                            },
                            sectionTwo: {
                                title: 'Quando o Amor Entra Sem Bater na Porta',
                                text: [
                                    'Sobre o amor que vem como um temporal em meio a calmaria e dan??ando bagun??a o que levou meses pra organizar ???'
                                ]
                            },
                            sectionThree: {
                                text: [
                                    '"??s vezes pequenos acontecimentos parecem desencadear uma s??rie de outros que nem de longe poderiam ter sido imaginados olhando em perspectiva, mas quando observados em retrospecto, n??o s?? fazem todo sentido como tamb??m faz desejar que aquilo tenha acontecido exatamente como aconteceu. ?? olhar para tr??s e n??o querer que uma brisa de ver??o se quer tivesse passado naquele momento com receio de que ela trouxesse um desfecho diferente ???'
                                ]
                            },
                            sectionFour: {
                                text: [
                                    'A vida em si, ?? muito mais aleat??ria do que aprendemos a enxergar. O universo ?? grande e desconhecido o suficiente pra que ela acreditasse que uma conspira????o de energias estivesse agindo para leva-la ??quele momento. Talvez estivesse, mas n??o estava, at?? por isso, ama e nutri enorme carinho em cada detalhe, que poderia ter sido completamente diferente, mas que foi exato e perfeito ???'
                                ]
                            },
                            sectionFive: {
                                text: [
                                    'Recolheu algumas coisas jogadas aqui e ali, tirou o p?? que fazia camada em cima dos livros, afastou a cama, lavou os banheiros e cozinha, varreu o tapete da sala, subiu nas escadas para limpar as partes mais altas e agachou para encontrar o mais solit??rio farelo embaixo dos arm??rios. Ergueu coisa ou outra e reorganizou todo o guarda-roupas. A casa nunca esteve t??o arrumada assim ???'
                                ]
                            },
                            sectionSix: {
                                text: [
                                    'At?? por isso, quando ele chegou e bagun??ou tudo, perdeu o norte. Veio como uma tempestade em pleno ver??o, forte e inesperada, em segundos acabou com o trabalho de meses. N??o era capaz de compreender como um rec??m conhecido a abalou tanto. Nem em mais acentuado del??rio imaginou se entregar a um romance t??o de repente, mas parecia imposs??vel conter, o sentimento era urgente ???'
                                ]
                            },
                            sectionSeven: {
                                text: [
                                    'N??o foi falta de avisar, ele a preparou, queria um lance r??pido, tinha planos e logo deveria passar, mesmo que a bagun??a ainda estivesse ali. Os ventos vinham de outro continente, e para o mesmo continente, queriam voltar. Ela correu, pensou em fechar as janelas e as portas e tampar cada brecha que pudesse deix??-lo escapar ???'
                                ]
                            },
                            sectionEight: {
                                text: [
                                    'Chorou, n??o fechou nada, sabia que um amor jamais poderia aprisionar, mas sim dar asas, e se for o caso, ensinar a voar e com muita sorte o desejo de ambos venha a se tornar o mesmo bater de asas, lado a lado, rumo ao mesmo destino. A vida tem l?? os seus dias de sol, capaz de no momento mais inoportuno trazer chuva, que naquele dia insistiu em atrapalhar o lindo pique-nique que haviam planejado. Mas n??o ?? a vida uma sequ??ncia de acontecimentos aleat??rios que tendem a fazer sentido apenas no final? ???'
                                ]
                            },
                            sectionNine: {
                                text: [
                                    'As portas e janelas estavam abertas, mas ele escolheu n??o ser um temporal passageiro. A chuva at?? entrou por onde tinha que entrar e depois transbordou, primeiro nos olhos dela, depois nos olhos dele. Decidiram ent??o que o melhor caminho seria o que trilhariam juntos, ou melhor, voariam juntos. Mesmo que tenham tra??ado uma rota que seja um tico mais demorada, notaram que o destino ainda seria o mesmo. Um tempo a mais pode parecer atraso aos olhos desatentos, mas para eles, estar dividindo esse tempo com o outro, ?? o que faz valer cada segundo a mais ???'
                                ]
                            },
                            sectionTen: {
                                text: [
                                    'Talvez a met??fora das asas seja a que mais lhe agrada, provavelmente por sentir as borboletas no est??mago sempre que est??o por perto. Hoje olha para tr??s e n??o deseja que nada tenha sido diferente. Ela ama as coincid??ncias que os colocaram juntos. As emo????es, outrora contidas, agora s??o compartilhadas.',
                                    'Ela ama ele. Ele ama ela. E juntos est??o, batendo forte suas asas para enfim voarem juntos.',
                                    'E amar ?? como o sol de ver??o, que aquece e tira o medo de enfrentar os riscos e alimenta coragem para se entregar."'
                                ]
                            }
                        }
                    },
                    photos: {
                        title: 'Nossas Fotos'
                    },
                    venue: {
                        title: 'Local do Evento',
                        subtitle: 'Cerim??nia e Recep????o',
                        when: {
                            title: 'Quando',
                            subtitle: '1 de Julho de 2022, 18:00'
                        },
                        where: {
                            title: 'Onde',
                            subtitle: 'Emp??rio Loft - Rua Para??ba 533 - Jardim Higien??polis, Londrina - PR, 86020-090',
                            route: 'Ver rota'
                        }
                    },
                    rsvp: {
                        title: 'Confirme sua presen??a',
                        subtitle: 'Esperamos ansiosamente por voc??s! Confirme pelo Whatsapp com a nossa assessoria:',
                        wpp: 'https://api.whatsapp.com/send/?phone=5543999779518&text=Ol%C3%A1%2C+gostaria+de+confirmar+a+minha+presen%C3%A7a+no+casamento+da+Mariana+e+Davi%2E&app_absent=0'
                    },
                    support: {
                        title: 'Nossa Lista de Presentes',
                        list: 'Lista dispon??vel no site casar.com:',
                        pix: 'Presentes por pix podem ser enviados diretamente pelo QR code abaixo:',
                        international: {
                            title: 'Contas internacionais para envio de presentes:'
                        }
                    },
                    footer: {
                        separator: 'e'
                    }
                }
            }
        }
    });

export default i18n;