import {
  ChatAlt2Icon,
  ChevronRightIcon,
  ClipboardListIcon,
  LightningBoltIcon,
} from "@heroicons/react/outline";

interface VideoProps {
  slugDaAula: string;
}

const Video = (props: VideoProps) => {
  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <iframe
            src="https://www.youtube.com/watch?v=KJj70dBgRPo"
            frameBorder="1"
          ></iframe>
        </div>
      </div>
      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Aula 01 - Abertura do evento</h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              Descrição da aula descrição da aula descrição da aula descrição da aula
              descrição da aula descrição da aula.
            </p>

            <div className="flex items-center gap-4 mt-6">
              <img
                className="h-16 w-16 rounded-full border-2 border-blue-500"
                src="https://www.github.com/alanabacco.png"
                alt="foto da pessoa professora"
              />

              <div className="leading-relaxed">
                <strong className="font-bold text-2xl block">Alana</strong>
                <span className="text-gray-200 text-sm block">Desenvolvedora</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href=""
              className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center"
            >
              <ChatAlt2Icon className="h-5 w-5" />
              Comunidade do Discord
            </a>
            <a
              href=""
              className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors"
            >
              <LightningBoltIcon className="h-5 w-5" />
              Acesse o desafio
            </a>
          </div>
        </div>

        <div className="gap-8 mt-20 grid grid-cols-2">
          <a
            href=""
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-green-700 h-full p-6 flex items-center">
              <ClipboardListIcon className="h-10 w-10" />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Material complementar</strong>
              <p className="text-sm text-gray-200 mt-2">
                Acesse o material complementar para acelerar o seu desenvolvimento
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <ChevronRightIcon className="h-6 w-6" />
            </div>
          </a>

          <a
            href=""
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-green-700 h-full p-6 flex items-center">
              <ClipboardListIcon className="h-10 w-10" />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Wallpapers exclusivos</strong>
              <p className="text-sm text-gray-200 mt-2">
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <ChevronRightIcon className="h-6 w-6" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Video;
