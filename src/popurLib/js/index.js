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
    openedPopur = false;

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
    }

    openPopur() {
        this.openedPopur = true;
        this.wrapPopur.append(this.div);
        this.btnClosePopur = document.querySelector(this.btnCloseId);

        this.btnClosePopur.addEventListener('click', this.closePopurWithThis)
        document.addEventListener('keydown', this.closePopurWithThis)

    }

    closePopur(e) {
        this.openedPopur = false;
        if(e.code === 'Escape') {
            document.querySelector('.wrapper-popur').remove();
            document.removeEventListener('keydown', this.closePopurWithThis);
        } 
        if(e.type === 'click') {
            document.querySelector('.wrapper-popur').remove();
        }

    }

    destroy() {
        this.btnOpenPopur.removeEventListener('click', this.openPopurWithThis);
        if(this.btnClosePopur) {
            this.btnClosePopur.removeEventListener('click', this.closePopurWithThis);
            this.btnClosePopur = '';
        }
        if(this.openedPopur) document.querySelector('.wrapper-popur').remove();
    }
}

const initOptions = {
    btnInitId : '#btnOpenPopur',
    wrapId : '#wrapApp',
}

const popur = new InitPopur(initOptions);

popur.init();





