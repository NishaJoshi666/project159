AFRAME.registerComponent('info-banner',{
    schema:{
        itemsId:{default:'',type:'string'}
    },
    update:function(){
        this.createCards();
    },
    createCards:function(){
        const postersInfo = {
            aladdin:{
                bannerUrl:'./images/infoImage/aladdin.jpg',
                title:'Aladdin',
            },
            jungle:{
                bannerUrl:'./images/infoImage/jungle.jpg',
                title:'Jungle Book',
            },
            lionking:{
                bannerUrl:'./images/infoImage/lionking.png',
                title:'The Lion King',
            },
            tomandjerry:{
                bannerUrl:'./images/infoImage/tomandjerry.jpg',
                title:'Tom and Jerry',
            }
        }

        const {itemsId} = this.data
        const fadeBackgroundEl = document.querySelector('#fadeBackground')
        const entityEl = document.createElement('a-entity')
        entityEl.setAttribute('visible',true)
        entityEl.setAttribute('id',`${itemsId}-banner`)
        entityEl.setAttribute('geometry',{
            primitive:'plane',
            width:7,
            height:1,
        });

        entityEl.setAttribute('position',{x:0,y:0,z:0})
        entityEl.setAttribute('material',{
            color:'black'
        });
        const item = postersInfo[itemsId]
        console.log(itemsId)
        const imageEl = this.createImageEl(item)
        const titleEl = this.createTitleEl(item)
        entityEl.appendChild(imageEl)
        entityEl.appendChild(titleEl)
        fadeBackgroundEl.appendChild(entityEl)
    },
    createImageEl:function(item){
        const entityEl = document.createElement('a-entity')
        entityEl.setAttribute('visible',true)
        entityEl.setAttribute('geometry',{
            primitive:'plane',
            width:4,
            height:0.8
        });
        entityEl.setAttribute('material',{
            src:item.bannerUrl
        })
        entityEl.setAttribute("position", { x: 0, y: 0, z:-5  });
        entityEl.setAttribute("scale",{x:4,y:5,z:5})
        return entityEl
    },
    createTitleEl:function(item){
        const entityEl = document.createElement('a-entity')
        entityEl.setAttribute('visible',true)
        entityEl.setAttribute('text',{
            font:'dejavu',
            width:2,
            height:2,
            color:'white',
            anchor:'left',
            value:item.title
        })
        entityEl.setAttribute('position',{y:0.2,z:0.6})
        return entityEl
    }
})
