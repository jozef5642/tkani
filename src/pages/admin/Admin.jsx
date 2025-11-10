import styles from "./Admin.module.css"
import * as Avatar from "@radix-ui/react-avatar";


export let Admin = () => {

  return(
    <>
      <section className="bg-white md:min-w-[919px] flex flex-col rounded-3xl p-5">
          <h1 className="text-accentDark mb-4 md: text-[38px] font-bold w-full h-[46px] font-medium
          ">Личный кабинет</h1>
          <div className="text-accentDark md: flex flex-row aligh-center justify-between ">
          <h6 className="text-[20px] ml-4 font-medium">Личные данные</h6>
          <button className=" mr-2 mb-2 w-[103px] h-[33px] bg-[#888888] text-light rounded-lg content-center
          hover:bg-[#4D4D4D]"
          >Сохранить
          </button>
          </div>   
      

          {/* Аватарка */}
          <div className="flex items-center gap-4 p-4">
              <Avatar.Root className="inline-flex h-12 w-12 select-none items-center justify-center overflow-hidden rounded-full bg-gray-200 align-middle"> //Главный контейнер
                <Avatar.Image
                  className="h-full w-full object-cover"
                  src="https://i.pravatar.cc/100"//адрес картинки 
                  alt="User avatar"
                />
                <Avatar.Fallback //картинка если не прогрузилась(JD)
                  className="text-gray-700 text-sm font-medium"
                  delayMs={600}
                >
                  JD
                </Avatar.Fallback>
              </Avatar.Root>
              <div>
                <button className=" mr-2 mb-2 w-full h-[33px] text-accentDark border border-black rounded-md"
                >Загрузить фотографию
                </button>
              </div>
          </div>

          {/* Имя Фамилия регистрация */}
          <div className="mb-5 w-full flex flex-row justify-between">
            <div className="w-1/2 mr-4 flex-col"> 
              <p className="text-accentDark text-[14px]">Имя</p>
              <input className="w-full bg-[#F1F0EE] min-h-[38px] rounded-md pl-2" name="myInput" />
            </div> 
            
            <div className="w-1/2 flex-col">
              <p className="text-accentDark text-[14px]">Фамилия</p>
              <input className="w-full bg-[#F1F0EE] min-h-[38px] rounded-md pl-2" name="myInput" />
            </div>
          </div>
          <hr/>

          {/* Почта */}
          <div className="flex justify-between align-top mt-5">
            <div className="flex flex-col w-1/2">
              <h6 className="text-[20px] text-accentDark m-8 ml-0 mt-3 font-medium"
              >Почта
              </h6>
              <p className="text-accentDark text-[14px]">e-mail</p>
              <input className="w-full bg-[#F1F0EE] min-h-[38px] rounded-md pl-2" name="myInput" />
            </div>

            <button className=" m-2 w-[103px] h-[33px] bg-[#888888] text-light rounded-lg content-center
          hover:bg-[#4D4D4D]"
            >Сохранить
            </button>
          </div>
          <hr/>

          <div className="flex flex-row justify-between align-top mt-5">
            <h6 className="text-[20px] text-accentDark font-medium"
              >Смена пароля
              </h6>
           <button className=" p-2 w-auto bg-[#888888] text-light rounded-lg content-center
            hover:bg-[#4D4D4D]"
            >Изменить пароль
            </button>
          </div>

          <div className="w-1/2 flex-col mt-4">
              <p className="text-accentDark text-[14px]">Старый пароль</p>
              <input className="w-full bg-[#F1F0EE] min-h-[38px] rounded-md pl-2" name="myInput" />
            </div>

            <div className="w-1/2 flex-col mt-4">
              <p className="text-accentDark text-[14px]">Новый пароль</p>
              <input className="w-full bg-[#F1F0EE] min-h-[38px] rounded-md pl-2" name="myInput" />
            </div>

            <div className="w-1/2 flex-col mt-4">
              <p className="text-accentDark text-[14px]">Потвердите пароль</p>
              <input className="w-full bg-[#F1F0EE] min-h-[38px] rounded-md pl-2" name="myInput" />
            </div>  

      </section>
   
  
    </>
  )
}