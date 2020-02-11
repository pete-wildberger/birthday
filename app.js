class AppClass {
    constructor(cont) {
        this.container = cont;
        this.assets = [
            'https://media.giphy.com/media/nNrkgR4Z7RHDW/giphy.gif',
            'https://media.giphy.com/media/7Is0OQjebmXS/giphy.gif',
            'https://media.giphy.com/media/4wHaeyN9mfIlO/giphy.gif',
            'https://media.giphy.com/media/Ay3LaPbnlyQHC/giphy.gif',
            'https://media.giphy.com/media/PVteyGeIHlF1m/giphy.gif',
            'https://media.giphy.com/media/kI2hsMDS4zjK7Fbif8/giphy.gif',
            'https://media.giphy.com/media/l41YkEYrcqrPOpuIE/giphy.gif',
            'https://media.giphy.com/media/ptTcJgGwGcQCY/giphy.gif',
            'https://media.giphy.com/media/khdqe67n8qi8U/giphy.gif',
            'https://media.giphy.com/media/3orieM2yXrt2kK4B4Q/giphy.gif',
            'https://media.giphy.com/media/yoJC2GnSClbPOkV0eA/giphy.gif',
            'https://media.giphy.com/media/HjRbb0LcBf5Ze/giphy.gif',
            'https://media.giphy.com/media/MLZYKauKxeqKk/giphy.gif',
            'http://res.cloudinary.com/bleachr/image/upload/v1581450784/qb0kzo9lytg26vpkuomm.gif',
            'https://media.giphy.com/media/BcPbK9ci4EU31qUTkR/giphy.gif',
            'https://media.giphy.com/media/nJukg9fIatfq0/giphy.gif',
            'https://media.giphy.com/media/7hLRKL65FxCuY/giphy.gif',
            'https://media.giphy.com/media/3o7btNhMBytxAM6YBa/giphy.gif',
            'https://media.giphy.com/media/l8XYZYdlOHSrS/giphy.gif',
            'https://media.giphy.com/media/3ohzdMZho4Ody9bK8w/giphy.gif',
            'https://scontent.ffcm1-2.fna.fbcdn.net/v/t31.0-0/p206x206/14188567_10207108906062500_6319916950064080223_o.jpg?_nc_cat=107&_nc_ohc=LjruMZOr-wkAX-IMBkr&_nc_ht=scontent.ffcm1-2.fna&_nc_tp=6&oh=be8595cf151408f1fd865d68da5f72cd&oe=5EC502C8'
         ];
         this.run();
    }

    run = () => {
        console.log('HappyBirthday');
        console.log(this.container)
        this.addToDOM(this.container);
    }

    addToDOM = (container) => {
        this.assets.forEach(src => {
            const div = document.createElement('div');
            div.classList.add('item');

            const img = new Image();
            img.src = src;

            div.appendChild(img);
            container.appendChild(div);
        })
    }
}

(function(){
    const top = document.getElementById('container');
    const app = new AppClass(top);
})()