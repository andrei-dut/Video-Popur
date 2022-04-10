class InitPopur {

    div = document.createElement('div');
    htmlPopur = `<div class="popur">
        <button  class="popur__btnClosePlayer" title="Закрыть" id="btnClosePopur">
            <p class="text_hidden" >Закрыть</p>
            &#10006;
        </button>
        <iframe  width="100%" height="100%" src="https://www.youtube.com/embed/Mqmwx-GcSTs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>`;
    btnCloseId = '#btnClosePopur';
    btnClosePopur = '';

    openPopurWithThis ;
    closePopurWithThis ;

    constructor(options) { 
        this.btnOpenPopur = document.querySelector(options.btnInitId);
        this.wrapPopur = document.querySelector(options.wrapId);

        this.div.className = "wrapper-popur";
        this.div.innerHTML = this.htmlPopur;
    }

    init() {  
        this.openPopurWithThis = this.openPopur.bind(this);
        this.closePopurWithThis = this.closePopur.bind(this);

        this.btnOpenPopur.addEventListener('click', this.openPopurWithThis);
        document.addEventListener('keydown', this.closePopurWithThis)
    }

    openPopur() {
        this.wrapPopur.append(this.div);
        this.btnClosePopur = document.querySelector(this.btnCloseId);

        this.btnClosePopur.addEventListener('click', this.closePopurWithThis)
    }

    closePopur(e) {
        if(e.code === 'Escape') {
            this.destroy(true);
        } 
        if(e.type === 'click') {
            this.destroy(true);
        }
    }

    destroy(close) {
        let popur = document.querySelector('.wrapper-popur');
        
        if(!close) {
            this.btnOpenPopur.removeEventListener('click', this.openPopurWithThis);
            document.removeEventListener('keydown', this.closePopurWithThis)
        }
        if(this.btnClosePopur) {
            this.btnClosePopur.removeEventListener('click', this.closePopurWithThis);
            this.btnClosePopur = '';
        }
        if(popur) popur.remove();
    }
}

const initOptions = {
    btnInitId : '#btnOpenPopur',
    wrapId : '#wrapApp',
}

const popur = new InitPopur(initOptions);

popur.init();





