
Vue.createApp(
    {
       
        data(){
            return {
              empty1:false,
              empty2:false,
              empty3:false,
              closeimg:'icons8-close-24.png',
                statuv:false,
                condition:' hidden',
               value:'please entr',
                src : '1401-09-17 00_03_43-Window.png',
                alt : 'webprog.ir',
                href : null,
                text : 'webprog.ir',
                html : '<strong>webprog.ir</strong>',
                titltnotcorrect:'',
                titltnotcorrectpass:'',
                i:0,
                chek: false,
                
               loginform: {
                    username: 'haniyeh' ,
                    password: '123' 
                },
           community :[
            {
                names:null,
                pass:null
            }
           ],
           newmemmber:[
            {
            username:null,
            email:null,
            password:null
            }
           ]
           
                            
            }
            
            
        },
        computed: {
         
          },
          watch:{

            
          },
  methods:{  
 

    loginfunction() {
        
   console.log(this.statuv,"first state");
   if(this.community.pass==null ||this.community.names==null  ){
       this.href=null;
       this.statuv=true;
      // this.emptyworning();
       
        console.log(this.statuv,'اخرین حالت');

       
      this. value='please enter correct number';
 
        }
        
     this.chek =this.loginform.username==this.community.names;
       this.i=1;
       if(this.chek===true){
       this.href='https://fjolt.com/article/vue-template-refs';
       console.log("name is same as saved");
    }
    else{
        this.href=null;
    }

    
       ;
       console.log(this.chek);
       
       console.log(this.loginform.username);
       console.log(this.community.names);
         },
    
 
         closeimgfunction(){
          this.statuv=false;
          },
          singinfunction(){
            if(this.newmemmber.username==null || this.newmemmber.password==null || this.newmemmber.email){
              alert("please fill the boxes!")
              if(this.newmemmber.username==null){this.empty1=true;}
              if(this.newmemmber.password==null){this.empty2=true;}
              if(this.newmemmber.email==null){this.empty3=true;}
              
              console.log(this.empty1,"empty1")
              console.log(this.empty2,"empty2")
              console.log(this.empty3,"empty3")
            }
            else{
            console.log(this.newmemmber.username);
            console.log(this.newmemmber.email);
            console.log(this.newmemmber.password);
            alert("welcome "+this.newmemmber.username+'to this web body! ;)');
            }

          }
               
 
 
        },    
 


}
 
).mount('#app');