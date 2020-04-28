import {renderEntireTree} from "../render";

let state = {


    profilePage:{
        postData: [
            {id:1, message: 'Закончил я на 33 уроке  на 7мин.15сек ', like: 11 },
            {id:2, message: 'Та всё нормас сам как?22', like: 33},
            {id:3, message: 'Та в11сё нормас сам как?22', like: 323},
            {id:4, message: 'Та в11сё нормас сам как?9988767', like: 89}
        ],
        
    },


    dialogsPage:{
        dialogsData:[
            {id: 1, name:'Вова'},
            {id: 2, name:'Света'},
            {id: 3, name:'Женя'},
            {id: 4, name:'Коля'}
        ],
        messageData:[
            {message:'Привет11 я Вова, пишу тебе.'},
            {message:'Привет22 я Света, пишу тебе.'},
            {message:'Привет33 я Женя, пишу тебе.'},
            {message:'Привет44 я Коля, пишу тебе.'}
        ]
    },


    sideBar:{
        SideBarBameUsers: [
            {name: 'Dima1'},
            {name: 'Dima2'},
            {name: 'Dima3'}
        ]
    },

    SocSeti:{
        FooterSocSeti: [
            {name: 'VK'},
            {name: 'Facebook'},
            {name: 'Instagram'}
        ]
    }



    
    
}

export let addPost = (postMessage) => {
   
    let newPost = {
        id: 5,
        message: postMessage
    };
    state.profilePage.postData.push(newPost);
    renderEntireTree();
}

export default state;
