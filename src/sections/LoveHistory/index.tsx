import { Swiper, SwiperSlide } from 'swiper/react'
import { SlidePrevButton, SlideNextButton } from './SlidesButton'

// Import Swiper styles
import 'swiper/css'
import './index.css'

function LoveHistory() {
  return (
    <section className="love-history w-full relative pt-10 pb-10 mb-12 block whitespace-normal break-words" id="love-history">
        <h2 className="px-4 mb-12 capitalize text-6xl sm:text-9xl text-center">Sobre nós</h2>
        <Swiper
            className="h-1/6 w-4/5"
            spaceBetween={0}
            slidesPerView={1}
            // onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide className="flex flex-wrap my-12 items-center text-justify">
                <div className="w-full md:w-1/2">
                    <img src="/story/our_story_001.jpg" alt="Our wedding" />
                </div>
                <div className="md:w-1/2 pl-0 md:px-12 mt-12 md:mt-0">
                    {/* <div className="relative mb-8 pb-3">
                        <h3 className="title-underscore font-bold text-3xl uppercase mb-1">Como nos conhecemos</h3>
                    </div> */}
                    <p className="mb-2">Em uma noite de natal, no meio de uma brincadeira, ela disse para quem quisesse ouvir que o homem pra si não estava em terras brasileiras! Uma semana depois ele voltou da Dinamarca e por uma coincidência do destino, sem muitas expectativas, por um aplicativo que não se espera que algo assim ocorra, o Match aconteceu. Vieram então o primeiro, o segundo e muitos outros encontros. Veio a amizade, a saudade, a vontade de ficarem juntos e por fim o amor.</p>
                    <p className="mb-2">Simples assim, como nós somos.</p>
                    <p className="mb-2">Mais sobre a nossa história no texto lindo escrito pelo nosso amigo escritor Matheus Jardim ⇢</p>
                </div>
            </SwiperSlide>
            <SwiperSlide className="flex flex-wrap my-12 items-center">
                <div className="w-full md:w-1/2">
                    <img src="/story/our_story_002.jpg" alt="Our wedding" />
                </div>
                <div className="md:w-1/2 pl-0 md:px-12 mt-12 md:mt-0">
                    <div className="relative mb-8 pb-3">
                        <h3 className="title-underscore font-bold text-3xl uppercase mb-1 text-center">Quando o Amor Entra Sem Bater na Porta</h3>
                    </div>
                    <p className="mb-2 italic text-justify">Sobre o amor que vem como um temporal em meio a calmaria e dançando bagunça o que levou meses pra organizar ⇢</p>
                </div>
            </SwiperSlide>
            <SwiperSlide className="flex flex-wrap my-12 items-center text-justify">
                <div className="w-full md:w-1/2">
                    <img src="/story/our_story_003.jpg" alt="Our wedding" />
                </div>
                <div className="md:w-1/2 pl-0 md:px-12 mt-12 md:mt-0">
                    {/* <div className="relative mb-8 pb-3">
                        <h3 className="title-underscore font-bold text-3xl uppercase mb-1">Como nos conhecemos</h3>
                    </div> */}
                    <p className="mb-2">"Às vezes pequenos acontecimentos parecem desencadear uma série de outros que nem de longe poderiam ter sido imaginados olhando em perspectiva, mas quando observados em retrospecto, não só fazem todo sentido como também faz desejar que aquilo tenha acontecido exatamente como aconteceu. É olhar para trás e não querer que uma brisa de verão se quer tivesse passado naquele momento com receio de que ela trouxesse um desfecho diferente ⇢</p>
                </div>
            </SwiperSlide>
            <SwiperSlide className="flex flex-wrap my-12 items-center text-justify">
                <div className="w-full md:w-1/2">
                    <img src="/story/our_story_004.jpg" alt="Our wedding" />
                </div>
                <div className="md:w-1/2 pl-0 md:px-12 mt-12 md:mt-0">
                    {/* <div className="relative mb-8 pb-3">
                        <h3 className="title-underscore font-bold text-3xl uppercase mb-1">Como nos conhecemos</h3>
                    </div> */}
                    <p className="mb-2">A vida em si, é muito mais aleatória do que aprendemos a enxergar. O universo é grande e desconhecido o suficiente pra que ela acreditasse que uma conspiração de energias estivesse agindo para leva-la àquele momento. Talvez estivesse, mas não estava, até por isso, ama e nutri enorme carinho em cada detalhe, que poderia ter sido completamente diferente, mas que foi exato e perfeito ⇢</p>
                </div>
            </SwiperSlide>
            <SwiperSlide className="flex flex-wrap my-12 items-center text-justify">
                <div className="w-full md:w-1/2">
                    <img src="/story/our_story_005.jpg" alt="Our wedding" />
                </div>
                <div className="md:w-1/2 pl-0 md:px-12 mt-12 md:mt-0">
                    {/* <div className="relative mb-8 pb-3">
                        <h3 className="title-underscore font-bold text-3xl uppercase mb-1">Como nos conhecemos</h3>
                    </div> */}
                    <p className="mb-2">Recolheu algumas coisas jogadas aqui e ali, tirou o pó que fazia camada em cima dos livros, afastou a cama, lavou os banheiros e cozinha, varreu o tapete da sala, subiu nas escadas para limpar as partes mais altas e agachou para encontrar o mais solitário farelo embaixo dos armários. Ergueu coisa ou outra e reorganizou todo o guarda-roupas. A casa nunca esteve tão arrumada assim ⇢</p>
                </div>
            </SwiperSlide>
            <SwiperSlide className="flex flex-wrap my-12 items-center text-justify">
                <div className="w-full md:w-1/2">
                    <img src="/story/our_story_006.jpg" alt="Our wedding" />
                </div>
                <div className="md:w-1/2 pl-0 md:px-12 mt-12 md:mt-0">
                    {/* <div className="relative mb-8 pb-3">
                        <h3 className="title-underscore font-bold text-3xl uppercase mb-1">Como nos conhecemos</h3>
                    </div> */}
                    <p className="mb-2">Até por isso, quando ele chegou e bagunçou tudo, perdeu o norte. Veio como uma tempestade em pleno verão, forte e inesperada, em segundos acabou com o trabalho de meses. Não era capaz de compreender como um recém conhecido a abalou tanto. Nem em mais acentuado delírio imaginou se entregar a um romance tão de repente, mas parecia impossível conter, o sentimento era urgente ⇢</p>
                </div>
            </SwiperSlide>
            <SwiperSlide className="flex flex-wrap my-12 items-center text-justify">
                <div className="w-full md:w-1/2">
                    <img src="/story/our_story_007.jpg" alt="Our wedding" />
                </div>
                <div className="md:w-1/2 pl-0 md:px-12 mt-12 md:mt-0">
                    {/* <div className="relative mb-8 pb-3">
                        <h3 className="title-underscore font-bold text-3xl uppercase mb-1">Como nos conhecemos</h3>
                    </div> */}
                    <p className="mb-2">Não foi falta de avisar, ele a preparou, queria um lance rápido, tinha planos e logo deveria passar, mesmo que a bagunça ainda estivesse ali. Os ventos vinham de outro continente, e para o mesmo continente, queriam voltar. Ela correu, pensou em fechar as janelas e as portas e tampar cada brecha que pudesse deixá-lo escapar ⇢</p>
                </div>
            </SwiperSlide>
            <SwiperSlide className="flex flex-wrap my-12 items-center text-justify">
                <div className="w-full md:w-1/2">
                    <img src="/story/our_story_008.jpg" alt="Our wedding" />
                </div>
                <div className="md:w-1/2 pl-0 md:px-12 mt-12 md:mt-0">
                    {/* <div className="relative mb-8 pb-3">
                        <h3 className="title-underscore font-bold text-3xl uppercase mb-1">Como nos conhecemos</h3>
                    </div> */}
                    <p className="mb-2">Chorou, não fechou nada, sabia que um amor jamais poderia aprisionar, mas sim dar asas, e se for o caso, ensinar a voar e com muita sorte o desejo de ambos venha a se tornar o mesmo bater de asas, lado a lado, rumo ao mesmo destino. A vida tem lá os seus dias de sol, capaz de no momento mais inoportuno trazer chuva, que naquele dia insistiu em atrapalhar o lindo pique-nique que haviam planejado. Mas não é a vida uma sequência de acontecimentos aleatórios que tendem a fazer sentido apenas no final? ⇢</p>
                </div>
            </SwiperSlide>
            <SwiperSlide className="flex flex-wrap my-12 items-center text-justify">
                <div className="w-full md:w-1/2">
                    <img src="/story/our_story_009.jpg" alt="Our wedding" />
                </div>
                <div className="md:w-1/2 pl-0 md:px-12 mt-12 md:mt-0">
                    {/* <div className="relative mb-8 pb-3">
                        <h3 className="title-underscore font-bold text-3xl uppercase mb-1">Como nos conhecemos</h3>
                    </div> */}
                    <p className="mb-2">As portas e janelas estavam abertas, mas ele escolheu não ser um temporal passageiro. A chuva até entrou por onde tinha que entrar e depois transbordou, primeiro nos olhos dela, depois nos olhos dele. Decidiram então que o melhor caminho seria o que trilhariam juntos, ou melhor, voariam juntos. Mesmo que tenham traçado uma rota que seja um tico mais demorada, notaram que o destino ainda seria o mesmo. Um tempo a mais pode parecer atraso aos olhos desatentos, mas para eles, estar dividindo esse tempo com o outro, é o que faz valer cada segundo a mais ⇢</p>
                </div>
            </SwiperSlide>
            <SwiperSlide className="flex flex-wrap my-12 items-center text-justify">
                <div className="w-full md:w-1/2">
                    <img src="/story/our_story_010.jpg" alt="Our wedding" />
                </div>
                <div className="md:w-1/2 pl-0 md:px-12 mt-12 md:mt-0">
                    {/* <div className="relative mb-8 pb-3">
                        <h3 className="title-underscore font-bold text-3xl uppercase mb-1">Como nos conhecemos</h3>
                    </div> */}
                    <p className="mb-2">Talvez a metáfora das asas seja a que mais lhe agrada, provavelmente por sentir as borboletas no estômago sempre que estão por perto. Hoje olha para trás e não deseja que nada tenha sido diferente. Ela ama as coincidências que os colocaram juntos. As emoções, outrora contidas, agora são compartilhadas.</p>
                    <p className="mb-2">Ela ama ele. Ele ama ela. E juntos estão, batendo forte suas asas para enfim voarem juntos.</p>
                    <p className="mb-2 italic">E amar é como o sol de verão, que aquece e tira o medo de enfrentar os riscos e alimenta coragem para se entregar."</p>
                </div>
            </SwiperSlide>

            <div className="w-full flex flex-wrap text-center align-center">
                <div className="w-1/2 pt-5 sm:pt-10">
                    <SlidePrevButton />
                </div>
                <div className="w-1/2 pt-5 sm:pt-10">
                    <SlideNextButton />
                </div>
            </div>
        </Swiper>
    </section>
  );
}

export default LoveHistory;
