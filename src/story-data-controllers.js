/* Mechanically translated recovered popup controllers. Original branching and reward code retained. */
export const STORY_CONTROLLERS={"class_1000":{parent:"popup",fields:{"var_49":function(){return null;},"var_3":function(){return null;}},imports:["MovieClip", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_Win_4", "victory_song"],methods:{"class_1000":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         this.var_3.hit_Play(true);
         this.var_3.hide_UI();
         this.method_182();
      
},"method_182":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.victory_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(!_loc2_)
         {
            return false;
         }
         if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_Win_4();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.end_Level();
      
}}},
"class_1001":{parent:"popup",fields:{"var_49":function(){return null;},"var_3":function(){return null;}},imports:["MovieClip", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_Level_15_Win", "victory_gym_song"],methods:{"class_1001":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         this.var_3.hit_Play(true);
         this.var_3.hide_UI();
         this.method_182();
      
},"method_182":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.victory_gym_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(!_loc2_)
         {
            return false;
         }
         if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_Level_15_Win();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         if(this.main.playerProfile.badges < 3)
         {
            this.main.playerProfile.badges = 3;
         }
         this.var_3.end_Level();
      
}}},
"class_1002":{parent:"popup",fields:{"var_3":function(){return null;},"var_22":function(){return 1;},"var_21":function(){return null;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "ash_song", "gymMusic", "movie_scene_intro_15", "ssanneMusic", "team_rocket_music"],methods:{"class_1002":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"method_419":function(){
         var _loc2_ = Math.trunc(0);
         var _loc1_ = null;
         var _loc3_ = false;
         _loc2_ = Math.trunc(0);
         while(_loc2_ < this.main.playerProfile.partyList.length)
         {
            _loc1_ = this.main.playerProfile.partyList[_loc2_];
            if(_loc1_)
            {
               if(_loc1_.num == 244)
               {
                  this.main.playerProfile.partyList[_loc2_] = null;
                  _loc3_ = true;
               }
               else if(_loc1_.num == 243)
               {
                  this.main.playerProfile.partyList[_loc2_] = null;
                  _loc3_ = true;
               }
               else if(_loc1_.num == 245)
               {
                  this.main.playerProfile.partyList[_loc2_] = null;
                  _loc3_ = true;
               }
            }
            _loc2_++;
         }
         if(_loc3_)
         {
            this.var_3.reset_Poke();
         }
      
},"init":function(){
         this.__super.init();
         if(this.var_3)
         {
            this.var_3.gfx_BG.visible = false;
            this.var_3.gfx_UI.visible = false;
         }
         if(this.main.playerProfile.lastLevelVisited < 15 && this.main.playerProfile.levelUnlocked < 15)
         {
            this.gfx.butt_skip.visible = false;
         }
         if(this.main.playerProfile.myAvatarGender)
         {
            this.var_21 = this.main.playerProfile.myAvatarGender;
            this.var_22 = this.main.playerProfile.myAvatarStyle;
         }
         this.gfx.addEventListener("frameConstructed",this.method_8);
      
},"method_263":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.team_rocket_music();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_181":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.ssanneMusic();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_205":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.ash_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_217":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.gymMusic();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"run":function(param1 = null){
         if(this.gfx.currentLabel == "teamRocket")
         {
            this.method_263();
         }
         else if(this.gfx.currentLabel == "ssanne")
         {
            this.method_181();
         }
         else if(this.gfx.currentLabel == "ash")
         {
            this.method_205();
         }
         else if(this.gfx.currentLabel == "gym")
         {
            this.method_217();
         }
         else if(this.gfx.currentLabel == "mewtwo")
         {
            this.method_5("150");
         }
         else if(this.gfx.currentLabel == "alakazam")
         {
            this.method_5("065");
         }
         return false;
      
},"method_8":function(param1){
         var _loc2_ = this.var_21 + "_" + this.var_22;
         if(this.gfx.yourAvatar && this.gfx.yourAvatar.currentLabel != _loc2_)
         {
            this.gfx.yourAvatar.gotoAndStop(_loc2_);
         }
         else if(this.gfx.yourAvatarWalk && this.gfx.yourAvatarWalk.currentLabel != _loc2_)
         {
            this.gfx.yourAvatarWalk.gotoAndPlay(_loc2_);
         }
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         if(param1.target && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            if(_loc2_.name == "butt_next")
            {
               if(this.gfx.currentLabel == "end_ssanne")
               {
                  if(this.var_21)
                  {
                     this.gfx.gotoAndPlay("haveAvatar");
                     return true;
                  }
               }
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "butt_girl")
            {
               this.var_21 = "girl";
               this.main.playerProfile.myAvatarGender = this.var_21;
               this.main.playerProfile.myAvatarStyle = 1;
               this.gfx.play();
            }
            else if(_loc2_.name == "butt_boy")
            {
               this.var_21 = "boy";
               this.main.playerProfile.myAvatarGender = this.var_21;
               this.main.playerProfile.myAvatarStyle = 1;
               this.gfx.play();
            }
            else if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip")
            {
               this.remove_Me();
               return true;
            }
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_intro_15();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_BG.visible = true;
         this.var_3.gfx_UI.visible = true;
         this.var_3.start_Level();
      
}}},
"class_1003":{parent:"popup",fields:{"var_3":function(){return null;},"var_22":function(){return 1;},"var_21":function(){return null;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "celadonCityMusic", "gymMusic", "movie_scene_intro_21"],methods:{"class_1003":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         if(this.var_3)
         {
            this.var_3.gfx_BG.visible = false;
            this.var_3.gfx_UI.visible = false;
         }
         if(this.main.playerProfile.lastLevelVisited < 21 && this.main.playerProfile.levelUnlocked < 21)
         {
            this.gfx.butt_skip.visible = false;
         }
         if(this.main.playerProfile.myAvatarGender)
         {
            this.var_21 = this.main.playerProfile.myAvatarGender;
            this.var_22 = this.main.playerProfile.myAvatarStyle;
         }
         this.gfx.addEventListener("frameConstructed",this.method_8);
      
},"method_307":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.celadonCityMusic();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_355":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.gymMusic();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"run":function(param1 = null){
         if(this.gfx.currentLabel == "celadon")
         {
            this.method_307();
         }
         else if(this.gfx.currentLabel == "gym")
         {
            this.method_355();
         }
         else if(this.gfx.currentLabel == "hitmonlee")
         {
            this.method_5("106");
         }
         return false;
      
},"method_8":function(param1){
         var _loc2_ = this.var_21 + "_" + this.var_22;
         if(Boolean(this.gfx.yourAvatar) && this.gfx.yourAvatar.currentLabel != _loc2_)
         {
            this.gfx.yourAvatar.gotoAndStop(_loc2_);
         }
         else if(Boolean(this.gfx.yourAvatarWalk) && this.gfx.yourAvatarWalk.currentLabel != _loc2_)
         {
            this.gfx.yourAvatarWalk.gotoAndPlay(_loc2_);
         }
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         if(Boolean(param1.target) && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            if(_loc2_.name == "butt_next")
            {
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip")
            {
               this.remove_Me();
               return true;
            }
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_intro_21();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_BG.visible = true;
         this.var_3.gfx_UI.visible = true;
         this.var_3.start_Level();
      
}}},
"class_1004":{parent:"popup",fields:{"var_49":function(){return null;},"var_3":function(){return null;}},imports:["MovieClip", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_Level_21_Win", "victory_song"],methods:{"class_1004":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         this.var_3.hit_Play(true);
         this.var_3.hide_UI();
         this.method_182();
      
},"method_182":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.victory_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(!_loc2_)
         {
            return false;
         }
         if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_Level_21_Win();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.end_Level();
      
}}},
"class_1005":{parent:"popup",fields:{"var_49":function(){return null;},"var_3":function(){return null;},"var_602":function(){return null;},"var_684":function(){return null;},"var_677":function(){return true;}},imports:["Tween", "TweenEvent", "Regular", "MovieClip", "Event", "MouseEvent", "SoundMixer"],constructors:["Tween", "movie_scene_Win_3"],methods:{"class_1005":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         if(this.main.playerProfile.levelUnlocked < 3)
         {
            this.var_677 = false;
         }
         this.SoundMixer.stopAll();
         this.var_3.hit_Play(true);
         this.var_3.hide_UI();
         this.var_602 = new this.Tween(this.var_3.gfx_BG,"y",this.Regular.easeOut,this.var_3.gfx_BG.y,0,1,true);
         this.var_684 = new this.Tween(this.var_3.gfx_BG,"x",this.Regular.easeOut,this.var_3.gfx_BG.x,0,1,true);
         this.var_684.start();
         this.var_602.addEventListener("motionFinish",this.method_129);
         this.var_602.start();
      
},"method_129":function(param1){
         this.var_602.removeEventListener("motionFinish",this.method_129);
         this.var_49 = new this.movie_scene_Win_3();
         this.var_3.gfx_BG.addChild(this.var_49);
         if(!this.var_677)
         {
            this.var_49.butt_skip.visible = false;
         }
      
},"run":function(param1 = null){
         if(!this.var_49)
         {
            return false;
         }
         if(this.var_49.currentLabel == "pidgey")
         {
            this.method_5("016");
         }
         else if(this.var_49.currentLabel == "rattata")
         {
            this.method_5("019");
         }
         return false;
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(!_loc2_)
         {
            return false;
         }
         if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         if(_loc2_.name == "butt_next")
         {
            if(Boolean(this.var_49) && this.var_49.currentLabel == "start")
            {
               if(!this.var_3.var_665)
               {
                  this.var_49.gotoAndPlay("rattata");
                  return true;
               }
               if(this.var_3.var_644)
               {
                  this.var_49.gotoAndPlay("mrmime_trade");
                  return true;
               }
               this.main.playerProfile.haveFlash = 1;
            }
            else if(Boolean(this.var_49) && this.var_49.currentLabel == "end_oak")
            {
               this.var_49.gotoAndPlay("rattata");
               return true;
            }
            this.var_49.play();
            return true;
         }
         if(_loc2_.name == "butt_yes")
         {
            this.method_259();
            this.var_49.play();
            return true;
         }
         if(_loc2_.name == "butt_no")
         {
            this.var_49.play();
            return true;
         }
         return false;
      
},"method_259":function(){
         var _loc1_ = this.var_3.var_644;
         _loc1_.num = 122;
         _loc1_.level = 1;
         _loc1_.experience = 0;
         _loc1_.move1 = 20;
         _loc1_.move2 = 197;
         _loc1_.move3 = 0;
         _loc1_.move4 = 0;
         _loc1_.moveSelected = 1;
         _loc1_.numMoves = 2;
         _loc1_.nickname = "Marcel";
         _loc1_.var_179 = _loc1_.level;
         _loc1_.var_175 = _loc1_.num;
         _loc1_.var_469 = 0;
         _loc1_.var_343 = 0;
         _loc1_.whoMe = "ekk";
         _loc1_.val.reset(_loc1_);
         _loc1_.saveInfo.needTrade = true;
         this.main.playerProfile.update_Pokedex(_loc1_);
         this.finder_Poke_Info.get_Poke_Info(_loc1_);
      
},"get_Graphic":function(){
         return null;
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.end_Level();
      
}}},
"class_1006":{parent:"popup",fields:{"var_3":function(){return null;},"var_602":function(){return null;}},imports:["Tween", "Regular", "MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "Tween", "cityMusic", "movie_scene_Intro_3", "route2Music"],methods:{"class_1006":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         if(this.var_3)
         {
            this.var_3.gfx_UI.visible = false;
         }
         if(this.main.playerProfile.lastLevelVisited < 3 && this.main.playerProfile.levelUnlocked < 3)
         {
            this.gfx.butt_skip.visible = false;
         }
      
},"method_231":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.cityMusic();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_283":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.route2Music();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"run":function(param1 = null){
         if(this.gfx.currentLabel == "city")
         {
            this.method_231();
         }
         else if(this.gfx.currentLabel == "route2")
         {
            this.method_283();
         }
         else if(this.gfx.currentLabel == "pidgey")
         {
            this.method_5("016");
         }
         else if(this.gfx.currentLabel == "rattata" || this.gfx.currentLabel == "rattata1")
         {
            this.method_5("019");
         }
         else if(this.gfx.currentLabel == "scroll_up")
         {
            this.var_602 = new this.Tween(this.gfx,"y",this.Regular.easeOut,this.gfx.y,600,7,true);
            this.var_602.start();
         }
         else if(this.gfx.currentLabel == "scroll_side")
         {
            this.var_602 = new this.Tween(this.gfx,"x",this.Regular.easeOut,this.gfx.x,-533,5,true);
            this.var_602.start();
         }
         else if(this.gfx.currentLabel == "reset")
         {
            this.SoundMixer.stopAll();
            this.gfx.y = 0;
            this.gfx.x = 0;
         }
         return false;
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         if(Boolean(param1.target) && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            if(_loc2_.name == "butt_next")
            {
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip")
            {
               this.remove_Me();
               return true;
            }
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_Intro_3();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_UI.visible = true;
         this.var_3.start_Level();
      
}}},
"class_1007":{parent:"popup",fields:{"var_3":function(){return null;},"var_22":function(){return 1;},"var_21":function(){return null;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_intro_38", "oceanMusic"],methods:{"class_1007":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         if(this.var_3)
         {
            this.var_3.gfx_BG.visible = false;
            this.var_3.gfx_UI.visible = false;
         }
         if(this.main.playerProfile.lastLevelVisited < 38 && this.main.playerProfile.levelUnlocked < 38)
         {
            this.gfx.butt_skip.visible = false;
         }
         if(this.main.playerProfile.myAvatarGender)
         {
            this.var_21 = this.main.playerProfile.myAvatarGender;
            this.var_22 = this.main.playerProfile.myAvatarStyle;
         }
         this.gfx.addEventListener("frameConstructed",this.method_8);
      
},"method_222":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.oceanMusic();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"run":function(param1 = null){
         if(this.gfx.currentLabel == "ocean")
         {
            this.method_222();
         }
         else if(this.gfx.currentLabel == "articuno" || this.gfx.currentLabel == "articuno2")
         {
            this.method_5("144");
         }
         return false;
      
},"method_8":function(param1){
         var _loc2_ = this.var_21 + "_" + this.var_22;
         if(Boolean(this.gfx.yourAvatar) && this.gfx.yourAvatar.currentLabel != _loc2_)
         {
            this.gfx.yourAvatar.gotoAndStop(_loc2_);
         }
         else if(Boolean(this.gfx.yourAvatarWalk) && this.gfx.yourAvatarWalk.currentLabel != _loc2_)
         {
            this.gfx.yourAvatarWalk.gotoAndPlay(_loc2_);
         }
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         var _loc3_ = null;
         if(Boolean(param1.target) && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            _loc3_ = this.gfx.currentLabel;
            if(_loc2_.name == "butt_next")
            {
               if(_loc3_ == "descision")
               {
                  this.gfx.gotoAndPlay(this.method_52());
                  return true;
               }
               if(_loc3_ == "d1" || _loc3_ == "d2" || _loc3_ == "d3" || _loc3_ == "d4" || _loc3_ == "d5")
               {
                  this.gfx.gotoAndPlay("end_descision");
                  return true;
               }
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip")
            {
               this.remove_Me();
               return true;
            }
         }
         return false;
      
},"method_52":function(){
         var _loc5_ = null;
         var _loc2_ = Math.trunc(0);
         var _loc1_ = Math.trunc(0);
         var _loc4_ = this.send_Msg("sponsor");
         var _loc3_ = Math.trunc(0);
         while(_loc3_ < this.main.playerProfile.partyList.length)
         {
            _loc5_ = this.main.playerProfile.partyList[_loc3_];
            if(_loc5_)
            {
               if(!(_loc4_ != "hacked" && _loc5_.myTag == "h"))
               {
                  if(_loc5_.is_Type(12))
                  {
                     _loc2_++;
                     if(_loc5_.level == 100)
                     {
                        _loc1_++;
                     }
                  }
               }
            }
            _loc3_++;
         }
         if(!_loc2_)
         {
            return "d1";
         }
         if(!_loc1_ && _loc2_ < 2)
         {
            return "d2";
         }
         if(!_loc1_)
         {
            return "d3";
         }
         if(_loc1_ < 6)
         {
            return "d4";
         }
         if(_loc1_ == 6)
         {
            return "d5";
         }
         return "d1";
      
},"get_Graphic":function(){
         return new this.movie_scene_intro_38();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_BG.visible = true;
         this.var_3.gfx_UI.visible = true;
         this.var_3.start_Level();
      
}}},
"class_1008":{parent:"popup",fields:{"var_49":function(){return null;},"var_3":function(){return null;},"var_22":function(){return 1;},"var_21":function(){return null;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_Level_38_Win", "profile_poke", "profile_poke_val", "victory_song"],methods:{"class_1008":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         this.var_3.hit_Play(true);
         this.var_3.hide_UI();
         this.method_182();
         if(!this.var_3.var_676)
         {
            this.gfx.actual.gotoAndStop(2);
         }
         else
         {
            this.method_322();
         }
         if(this.main.playerProfile.myAvatarGender)
         {
            this.var_21 = this.main.playerProfile.myAvatarGender;
            this.var_22 = this.main.playerProfile.myAvatarStyle;
         }
         this.gfx.actual.addEventListener("frameConstructed",this.method_8);
      
},"method_8":function(param1){
         var _loc2_ = this.var_21 + "_" + this.var_22;
         if(Boolean(this.gfx.actual.yourAvatar) && this.gfx.actual.yourAvatar.currentLabel != _loc2_)
         {
            this.gfx.actual.yourAvatar.gotoAndStop(_loc2_);
         }
         else if(Boolean(this.gfx.actual.yourAvatarWalk) && this.gfx.actual.yourAvatarWalk.currentLabel != _loc2_)
         {
            this.gfx.actual.yourAvatarWalk.gotoAndPlay(_loc2_);
         }
      
},"method_182":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.victory_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(!_loc2_)
         {
            return false;
         }
         if(_loc2_.name == "butt_next")
         {
            this.gfx.actual.play();
            return true;
         }
         if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"method_322":function(){
         var _loc1_ = new this.profile_poke();
         _loc1_.num = 144;
         this.finder_Poke_Info.get_Poke_Info(_loc1_);
         _loc1_.level = 1;
         _loc1_.move1 = 15;
         _loc1_.move2 = 121;
         _loc1_.numMoves = 2;
         _loc1_.moveSelected = 1;
         _loc1_.id = ++this.main.playerProfile.latestID;
         _loc1_.experience = 0;
         _loc1_.var_179 = _loc1_.level;
         _loc1_.var_175 = _loc1_.num;
         _loc1_.shiny = this.method_54();
         var _loc2_ = this.send_Msg("sponsor");
         if(_loc2_ == "hacked")
         {
            _loc1_.myTag = "h";
         }
         _loc1_.val = new this.profile_poke_val();
         _loc1_.saveInfo.needCaptured = true;
         _loc1_.saveInfo.extra = 300;
         this.method_50(_loc1_);
         _loc1_.val.reset(_loc1_);
         if(_loc1_.name != "Articuno")
         {
            return;
         }
         this.main.playerProfile.update_Pokedex(_loc1_);
         this.main.playerProfile.pokeList.push(_loc1_);
      
},"method_54":function(){
         var _loc3_ = null;
         var _loc2_ = Math.trunc(0);
         var _loc1_ = Math.trunc(0);
         var _loc4_ = Math.trunc(0);
         while(_loc4_ < this.main.playerProfile.partyList.length)
         {
            _loc3_ = this.main.playerProfile.partyList[_loc4_];
            if(_loc3_)
            {
               if(_loc3_.shiny == 2)
               {
                  _loc1_++;
               }
               else if(_loc3_.shiny == 1)
               {
                  _loc2_++;
               }
            }
            _loc4_++;
         }
         if(_loc2_ == 6)
         {
            this.main.playerProfile.addExtraInfo(24);
            return 1;
         }
         if(_loc1_ == 6)
         {
            this.main.playerProfile.addExtraInfo(25);
            return 2;
         }
         this.main.playerProfile.addExtraInfo(23);
         return 0;
      
},"get_Graphic":function(){
         return new this.movie_scene_Level_38_Win();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.end_Level();
      
},"method_50":function(param1){
         if(param1.shiny == 2)
         {
            param1.saveInfo.extra = 855;
         }
         else if(param1.shiny == 1)
         {
            param1.saveInfo.extra = 854;
         }
         else
         {
            param1.saveInfo.extra = 857;
         }
      
}}},
"class_1009":{parent:"popup",fields:{"var_3":function(){return null;},"var_22":function(){return 1;},"var_21":function(){return null;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_intro_40", "route4Music"],methods:{"class_1009":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         if(this.var_3)
         {
            this.var_3.gfx_BG.visible = false;
            this.var_3.gfx_UI.visible = false;
         }
         if(this.main.playerProfile.lastLevelVisited < 39 && this.main.playerProfile.levelUnlocked < 39)
         {
            this.gfx.butt_skip.visible = false;
         }
         if(this.main.playerProfile.myAvatarGender)
         {
            this.var_21 = this.main.playerProfile.myAvatarGender;
            this.var_22 = this.main.playerProfile.myAvatarStyle;
         }
         this.gfx.addEventListener("frameConstructed",this.method_8);
      
},"method_222":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.route4Music();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"run":function(param1 = null){
         if(this.gfx.currentLabel == "route4")
         {
            this.method_222();
         }
         return false;
      
},"method_8":function(param1){
         var _loc2_ = this.var_21 + "_" + this.var_22;
         if(Boolean(this.gfx.yourAvatar) && this.gfx.yourAvatar.currentLabel != _loc2_)
         {
            this.gfx.yourAvatar.gotoAndStop(_loc2_);
         }
         else if(Boolean(this.gfx.yourAvatarWalk) && this.gfx.yourAvatarWalk.currentLabel != _loc2_)
         {
            this.gfx.yourAvatarWalk.gotoAndPlay(_loc2_);
         }
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         var _loc3_ = null;
         if(Boolean(param1.target) && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            _loc3_ = this.gfx.currentLabel;
            if(_loc2_.name == "butt_next")
            {
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip")
            {
               this.remove_Me();
               return true;
            }
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_intro_40();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_BG.visible = true;
         this.var_3.gfx_UI.visible = true;
         this.var_3.start_Level();
      
}}},
"class_1010":{parent:"popup",fields:{"var_3":function(){return null;},"var_22":function(){return 1;},"var_21":function(){return null;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "ash_song", "lavenderTownMusic", "movie_scene_intro_19", "mt_moon_song", "route4Music"],methods:{"class_1010":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         if(this.var_3)
         {
            this.var_3.gfx_BG.visible = false;
            this.var_3.gfx_UI.visible = false;
         }
         if(this.main.playerProfile.lastLevelVisited < 19 && this.main.playerProfile.levelUnlocked < 19)
         {
            this.gfx.butt_skip.visible = false;
         }
         if(this.main.playerProfile.myAvatarGender)
         {
            this.var_21 = this.main.playerProfile.myAvatarGender;
            this.var_22 = this.main.playerProfile.myAvatarStyle;
         }
         this.gfx.addEventListener("frameConstructed",this.method_8);
      
},"method_127":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.mt_moon_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_205":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.ash_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_236":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.lavenderTownMusic();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_376":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.route4Music();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"run":function(param1 = null){
         if(this.gfx.currentLabel == "route8")
         {
            this.method_376();
         }
         return false;
      
},"method_8":function(param1){
         var _loc2_ = this.var_21 + "_" + this.var_22;
         if(Boolean(this.gfx.yourAvatar) && this.gfx.yourAvatar.currentLabel != _loc2_)
         {
            this.gfx.yourAvatar.gotoAndStop(_loc2_);
         }
         else if(Boolean(this.gfx.yourAvatarWalk) && this.gfx.yourAvatarWalk.currentLabel != _loc2_)
         {
            this.gfx.yourAvatarWalk.gotoAndPlay(_loc2_);
         }
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         if(Boolean(param1.target) && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            if(_loc2_.name == "butt_next")
            {
               if(this.gfx.currentLabel == "chooseFrames" && this.var_22 != 7)
               {
                  this.gfx.gotoAndPlay("noTr");
                  return true;
               }
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip")
            {
               this.remove_Me();
               return true;
            }
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_intro_19();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_BG.visible = true;
         this.var_3.gfx_UI.visible = true;
         this.var_3.start_Level();
      
}}},
"class_1011":{parent:"popup",fields:{"var_49":function(){return null;},"var_3":function(){return null;},"var_22":function(){return 1;},"var_21":function(){return null;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_ending_19", "victory_gym_song"],methods:{"class_1011":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         this.var_3.hit_Play(true);
         this.var_3.hide_UI();
         this.method_182();
         if(this.main.playerProfile.myAvatarGender)
         {
            this.var_21 = this.main.playerProfile.myAvatarGender;
            this.var_22 = this.main.playerProfile.myAvatarStyle;
         }
         this.gfx.addEventListener("frameConstructed",this.method_8);
      
},"method_182":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.victory_gym_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_8":function(param1){
         var _loc2_ = this.var_21 + "_" + this.var_22;
         if(Boolean(this.gfx.yourAvatar) && this.gfx.yourAvatar.currentLabel != _loc2_)
         {
            this.gfx.yourAvatar.gotoAndStop(_loc2_);
         }
         else if(Boolean(this.gfx.yourAvatarWalk) && this.gfx.yourAvatarWalk.currentLabel != _loc2_)
         {
            this.gfx.yourAvatarWalk.gotoAndPlay(_loc2_);
         }
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(!_loc2_)
         {
            return false;
         }
         if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip" || _loc2_.name == "butt_close")
         {
            this.remove_Me();
            return true;
         }
         if(_loc2_.name == "butt_next")
         {
            this.gfx.play();
            return true;
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_ending_19();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.end_Level();
      
}}},
"class_1012":{parent:"popup",fields:{"var_49":function(){return null;},"var_3":function(){return null;},"var_22":function(){return 1;},"var_21":function(){return null;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_Level_18_Win", "victory_gym_song"],methods:{"class_1012":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         this.var_3.hit_Play(true);
         this.var_3.hide_UI();
         this.method_182();
         if(this.main.playerProfile.myAvatarGender)
         {
            this.var_21 = this.main.playerProfile.myAvatarGender;
            this.var_22 = this.main.playerProfile.myAvatarStyle;
         }
      
},"method_182":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.victory_gym_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(!_loc2_)
         {
            return false;
         }
         if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"run":function(param1 = null){
         if(this.gfx.actual.yourAvatar)
         {
            this.gfx.actual.yourAvatar.gotoAndStop(this.var_21 + "_" + this.var_22);
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_Level_18_Win();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.end_Level();
      
}}},
"class_1013":{parent:"popup",fields:{"var_3":function(){return null;},"var_22":function(){return 1;},"var_21":function(){return null;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "ash_song", "lavenderTownMusic", "movie_scene_intro_18", "mt_moon_song", "route10Music", "team_rocket_music"],methods:{"class_1013":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         if(this.var_3)
         {
            this.var_3.gfx_BG.visible = false;
            this.var_3.gfx_UI.visible = false;
         }
         if(this.main.playerProfile.lastLevelVisited < 18 && this.main.playerProfile.levelUnlocked < 18)
         {
            this.gfx.butt_skip.visible = false;
         }
         if(this.main.playerProfile.myAvatarGender)
         {
            this.var_21 = this.main.playerProfile.myAvatarGender;
            this.var_22 = this.main.playerProfile.myAvatarStyle;
         }
         this.gfx.addEventListener("frameConstructed",this.method_8);
      
},"method_263":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.team_rocket_music();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_127":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.mt_moon_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_205":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.ash_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_236":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.lavenderTownMusic();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_227":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.route10Music();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"run":function(param1 = null){
         if(this.gfx.currentLabel == "route10")
         {
            this.method_227();
         }
         else if(this.gfx.currentLabel == "lavender")
         {
            this.method_236();
         }
         else if(this.gfx.currentLabel == "gastly")
         {
            this.method_5("092");
         }
         else if(this.gfx.currentLabel == "raikou")
         {
            this.method_5("243");
         }
         return false;
      
},"method_8":function(param1){
         var _loc2_ = this.var_21 + "_" + this.var_22;
         if(Boolean(this.gfx.yourAvatar) && this.gfx.yourAvatar.currentLabel != _loc2_)
         {
            this.gfx.yourAvatar.gotoAndStop(_loc2_);
         }
         else if(Boolean(this.gfx.yourAvatarWalk) && this.gfx.yourAvatarWalk.currentLabel != _loc2_)
         {
            this.gfx.yourAvatarWalk.gotoAndPlay(_loc2_);
         }
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         if(Boolean(param1.target) && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            if(_loc2_.name == "butt_next")
            {
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip")
            {
               this.remove_Me();
               return true;
            }
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_intro_18();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_BG.visible = true;
         this.var_3.gfx_UI.visible = true;
         this.var_3.start_Level();
      
}}},
"class_1014":{parent:"popup",fields:{"var_49":function(){return null;},"var_3":function(){return null;},"var_22":function(){return 1;},"var_21":function(){return null;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_Level_16_Win", "victory_gym_song"],methods:{"class_1014":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         this.var_3.hit_Play(true);
         this.var_3.hide_UI();
         this.method_182();
         if(this.main.playerProfile.myAvatarGender)
         {
            this.var_21 = this.main.playerProfile.myAvatarGender;
            this.var_22 = this.main.playerProfile.myAvatarStyle;
         }
      
},"method_182":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.victory_gym_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(!_loc2_)
         {
            return false;
         }
         if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"run":function(param1 = null){
         if(this.gfx.actual.yourAvatar)
         {
            this.gfx.actual.yourAvatar.gotoAndStop(this.var_21 + "_" + this.var_22);
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_Level_16_Win();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.end_Level();
      
}}},
"class_1015":{parent:"popup",fields:{"var_3":function(){return null;},"var_22":function(){return 1;},"var_21":function(){return null;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "ash_song", "gymMusic", "movie_scene_intro_16", "mt_moon_song", "team_rocket_music"],methods:{"class_1015":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         if(this.var_3)
         {
            this.var_3.gfx_BG.visible = false;
            this.var_3.gfx_UI.visible = false;
         }
         if(this.main.playerProfile.lastLevelVisited < 16 && this.main.playerProfile.levelUnlocked < 16)
         {
            this.gfx.butt_skip.visible = false;
         }
         if(this.main.playerProfile.myAvatarGender)
         {
            this.var_21 = this.main.playerProfile.myAvatarGender;
            this.var_22 = this.main.playerProfile.myAvatarStyle;
         }
      
},"method_263":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.team_rocket_music();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_127":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.mt_moon_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_205":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.ash_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_217":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.gymMusic();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"run":function(param1 = null){
         if(this.gfx.currentLabel == "mtmoon")
         {
            this.method_127();
         }
         else if(this.gfx.currentLabel == "gym")
         {
            this.method_217();
         }
         else if(this.gfx.currentLabel == "raichu")
         {
            this.method_5("026");
         }
         else if(this.gfx.currentLabel == "raikou")
         {
            this.method_5("243");
         }
         this.method_8(null);
         return false;
      
},"method_8":function(param1){
         var _loc2_ = this.var_21 + "_" + this.var_22;
         if(Boolean(this.gfx.yourAvatar) && this.gfx.yourAvatar.currentLabel != _loc2_)
         {
            this.gfx.yourAvatar.gotoAndStop(_loc2_);
         }
         else if(Boolean(this.gfx.yourAvatarWalk) && this.gfx.yourAvatarWalk.currentLabel != _loc2_)
         {
            this.gfx.yourAvatarWalk.gotoAndPlay(_loc2_);
         }
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         if(Boolean(param1.target) && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            if(_loc2_.name == "butt_next")
            {
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip")
            {
               this.remove_Me();
               return true;
            }
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_intro_16();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.gfx.removeEventListener("frameConstructed",this.method_8);
         this.var_3.gfx_BG.visible = true;
         this.var_3.gfx_UI.visible = true;
         this.var_3.start_Level();
      
}}},
"class_1016":{parent:"popup",fields:{"var_49":function(){return null;},"var_3":function(){return null;}},imports:["MovieClip", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_Level_29_Win", "victory_song"],methods:{"class_1016":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         this.var_3.hit_Play(true);
         this.var_3.hide_UI();
         this.method_182();
      
},"method_182":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.victory_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(!_loc2_)
         {
            return false;
         }
         if(_loc2_.name == "butt_next")
         {
            this.gfx.actual.play();
         }
         else if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_Level_29_Win();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.end_Level();
      
}}},
"class_1017":{parent:"popup",fields:{"var_3":function(){return null;},"var_22":function(){return 1;},"var_21":function(){return null;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "ceruleanMusic", "gymMusic", "movie_scene_intro_29"],methods:{"class_1017":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         if(this.var_3)
         {
            this.var_3.gfx_BG.visible = false;
            this.var_3.gfx_UI.visible = false;
         }
         if(this.main.playerProfile.lastLevelVisited < 29 && this.main.playerProfile.levelUnlocked < 29)
         {
            this.gfx.butt_skip.visible = false;
         }
         if(this.main.playerProfile.myAvatarGender)
         {
            this.var_21 = this.main.playerProfile.myAvatarGender;
            this.var_22 = this.main.playerProfile.myAvatarStyle;
         }
         this.gfx.addEventListener("frameConstructed",this.method_8);
      
},"method_199":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.gymMusic();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_213":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.ceruleanMusic();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"run":function(param1 = null){
         if(this.gfx.currentLabel == "gym")
         {
            this.method_199();
         }
         else if(this.gfx.currentLabel == "city")
         {
            this.method_213();
         }
         else if(this.gfx.currentLabel == "muk")
         {
            this.method_5("089");
         }
         return false;
      
},"method_8":function(param1){
         var _loc2_ = this.var_21 + "_" + this.var_22;
         if(Boolean(this.gfx.yourAvatar) && this.gfx.yourAvatar.currentLabel != _loc2_)
         {
            this.gfx.yourAvatar.gotoAndStop(_loc2_);
         }
         else if(Boolean(this.gfx.yourAvatarWalk) && this.gfx.yourAvatarWalk.currentLabel != _loc2_)
         {
            this.gfx.yourAvatarWalk.gotoAndPlay(_loc2_);
         }
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         if(Boolean(param1.target) && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            if(_loc2_.name == "butt_next")
            {
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip")
            {
               this.remove_Me();
               return true;
            }
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_intro_29();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         if(this.main.playerProfile.badges < 6)
         {
            this.main.playerProfile.badges = 6;
         }
         this.var_3.gfx_BG.visible = true;
         this.var_3.gfx_UI.visible = true;
         this.var_3.start_Level();
      
}}},
"class_1018":{parent:"popup",fields:{"var_49":function(){return null;},"var_3":function(){return null;},"var_276":function(){return false;}},imports:["MovieClip", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_Level_35_Win", "victory_song"],methods:{"class_1018":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         this.var_3.hit_Play(true);
         this.var_3.hide_UI();
         this.method_182();
      
},"method_182":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.victory_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(!_loc2_)
         {
            return false;
         }
         if(_loc2_.name == "butt_next")
         {
            this.gfx.actual.play();
         }
         else if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_Level_35_Win();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.end_Level();
      
}}},
"class_1019":{parent:"popup",fields:{"var_3":function(){return null;},"var_22":function(){return 1;},"var_21":function(){return null;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "ash_song", "cityMusic", "movie_scene_intro_35"],methods:{"class_1019":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         if(this.var_3)
         {
            this.var_3.gfx_BG.visible = false;
            this.var_3.gfx_UI.visible = false;
         }
         if(this.main.playerProfile.lastLevelVisited < 35 && this.main.playerProfile.levelUnlocked < 35)
         {
            this.gfx.butt_skip.visible = false;
         }
         if(this.main.playerProfile.myAvatarGender)
         {
            this.var_21 = this.main.playerProfile.myAvatarGender;
            this.var_22 = this.main.playerProfile.myAvatarStyle;
         }
         this.gfx.addEventListener("frameConstructed",this.method_8);
      
},"method_199":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.ash_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_275":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.cityMusic();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"run":function(param1 = null){
         if(this.gfx.currentLabel == "zapdos")
         {
            this.method_5("145");
         }
         else if(this.gfx.currentLabel == "final")
         {
            this.method_199();
         }
         else if(this.gfx.currentLabel == "city" || this.gfx.currentLabel == "city2")
         {
            this.method_275();
         }
         else if(this.gfx.currentLabel == "mewtwo")
         {
            this.method_5("150");
         }
         return false;
      
},"method_8":function(param1){
         var _loc2_ = this.var_21 + "_" + this.var_22;
         if(Boolean(this.gfx.yourAvatar) && this.gfx.yourAvatar.currentLabel != _loc2_)
         {
            this.gfx.yourAvatar.gotoAndStop(_loc2_);
         }
         else if(Boolean(this.gfx.yourAvatarWalk) && this.gfx.yourAvatarWalk.currentLabel != _loc2_)
         {
            this.gfx.yourAvatarWalk.gotoAndPlay(_loc2_);
         }
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         if(Boolean(param1.target) && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            if(_loc2_.name == "butt_next")
            {
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip")
            {
               this.remove_Me();
               return true;
            }
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_intro_35();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_BG.visible = true;
         this.var_3.gfx_UI.visible = true;
         this.var_3.start_Level();
      
}}},
"class_1020":{parent:"popup",fields:{"var_3":function(){return null;},"var_22":function(){return 1;},"var_21":function(){return null;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "cityMusic", "movie_scene_intro_27", "route4Music"],methods:{"class_1020":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         if(this.var_3)
         {
            this.var_3.gfx_BG.visible = false;
            this.var_3.gfx_UI.visible = false;
         }
         if(this.main.playerProfile.lastLevelVisited < 27 && this.main.playerProfile.levelUnlocked < 27)
         {
            this.gfx.butt_skip.visible = false;
         }
         if(this.main.playerProfile.myAvatarGender)
         {
            this.var_21 = this.main.playerProfile.myAvatarGender;
            this.var_22 = this.main.playerProfile.myAvatarStyle;
         }
         this.gfx.addEventListener("frameConstructed",this.method_8);
      
},"method_210":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.route4Music();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_213":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.cityMusic();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"run":function(param1 = null){
         if(this.gfx.currentLabel == "route")
         {
            this.method_210();
         }
         else if(this.gfx.currentLabel == "city")
         {
            this.method_213();
         }
         return false;
      
},"method_8":function(param1){
         var _loc2_ = this.var_21 + "_" + this.var_22;
         if(Boolean(this.gfx.yourAvatar) && this.gfx.yourAvatar.currentLabel != _loc2_)
         {
            this.gfx.yourAvatar.gotoAndStop(_loc2_);
         }
         else if(Boolean(this.gfx.yourAvatarWalk) && this.gfx.yourAvatarWalk.currentLabel != _loc2_)
         {
            this.gfx.yourAvatarWalk.gotoAndPlay(_loc2_);
         }
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         if(Boolean(param1.target) && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            if(_loc2_.name == "butt_next")
            {
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip")
            {
               this.remove_Me();
               return true;
            }
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_intro_27();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_BG.visible = true;
         this.var_3.gfx_UI.visible = true;
         this.var_3.start_Level();
      
}}},
"class_1021":{parent:"popup",fields:{"var_49":function(){return null;},"var_3":function(){return null;}},imports:["MovieClip", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_Level_27_Win", "victory_song"],methods:{"class_1021":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         this.var_3.hit_Play(true);
         this.var_3.hide_UI();
         this.method_182();
         if(!this.var_3.var_334)
         {
            this.gfx.actual.gotoAndStop(3);
         }
         else
         {
            this.main.playerProfile.addItem(8);
         }
      
},"method_182":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.victory_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(!_loc2_)
         {
            return false;
         }
         if(_loc2_.name == "butt_next")
         {
            this.gfx.actual.play();
         }
         else if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_Level_27_Win();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.end_Level();
      
}}},
"class_1022":{parent:"popup",fields:{"var_3":function(){return null;},"var_22":function(){return 1;},"var_21":function(){return null;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_intro_23", "pokeTowerMusic"],methods:{"class_1022":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         if(this.var_3)
         {
            this.var_3.gfx_BG.visible = false;
            this.var_3.gfx_UI.visible = false;
         }
         if(this.main.playerProfile.lastLevelVisited < 23 && this.main.playerProfile.levelUnlocked < 23)
         {
            this.gfx.butt_skip.visible = false;
         }
         if(this.main.playerProfile.myAvatarGender)
         {
            this.var_21 = this.main.playerProfile.myAvatarGender;
            this.var_22 = this.main.playerProfile.myAvatarStyle;
         }
         this.gfx.addEventListener("frameConstructed",this.method_8);
      
},"method_285":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.pokeTowerMusic();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"run":function(param1 = null){
         if(this.gfx.currentLabel == "pokeTower")
         {
            this.method_285();
         }
         return false;
      
},"method_8":function(param1){
         var _loc2_ = this.var_21 + "_" + this.var_22;
         if(Boolean(this.gfx.yourAvatar) && this.gfx.yourAvatar.currentLabel != _loc2_)
         {
            this.gfx.yourAvatar.gotoAndStop(_loc2_);
         }
         else if(Boolean(this.gfx.yourAvatarWalk) && this.gfx.yourAvatarWalk.currentLabel != _loc2_)
         {
            this.gfx.yourAvatarWalk.gotoAndPlay(_loc2_);
         }
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         if(Boolean(param1.target) && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            if(_loc2_.name == "butt_next")
            {
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip")
            {
               this.remove_Me();
               return true;
            }
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_intro_23();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_BG.visible = true;
         this.var_3.gfx_UI.visible = true;
         this.var_3.start_Level();
      
}}},
"class_1023":{parent:"popup",fields:{"var_49":function(){return null;},"var_3":function(){return null;}},imports:["MovieClip", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_Level_23_Win", "victory_song"],methods:{"class_1023":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         this.var_3.hit_Play(true);
         this.var_3.hide_UI();
         this.method_182();
      
},"method_182":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.victory_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(!_loc2_)
         {
            return false;
         }
         if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_Level_23_Win();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.end_Level();
      
}}},
"class_1024":{parent:"popup",fields:{"var_49":function(){return null;},"var_3":function(){return null;}},imports:["MovieClip", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_Win_5", "victory_gym_song"],methods:{"class_1024":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         this.var_3.hit_Play(true);
         this.var_3.hide_UI();
         this.method_182();
      
},"method_182":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.victory_gym_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(!_loc2_)
         {
            return false;
         }
         if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_Win_5();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.end_Level();
      
}}},
"class_1025":{parent:"popup",fields:{"var_3":function(){return null;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "gymMusic", "movie_scene_Intro_5", "team_rocket_music"],methods:{"class_1025":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         if(this.var_3)
         {
            this.var_3.gfx_BG.visible = false;
            this.var_3.gfx_UI.visible = false;
         }
         if(this.main.playerProfile.lastLevelVisited < 5 && this.main.playerProfile.levelUnlocked < 5)
         {
            this.gfx.butt_skip.visible = false;
         }
      
},"method_263":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.team_rocket_music();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_217":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.gymMusic();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"run":function(param1 = null){
         if(this.gfx.currentLabel == "teamrocket")
         {
            this.method_263();
         }
         else if(this.gfx.currentLabel == "gym")
         {
            this.method_217();
         }
         else if(this.gfx.currentLabel == "set_name")
         {
            this.gfx.your_name.text = this.main.playerProfile.myName + "...";
         }
         else if(this.gfx.currentLabel == "onyx")
         {
            this.method_5("095");
         }
         else if(this.gfx.currentLabel == "mewtwo" || this.gfx.currentLabel == "mewtwo2")
         {
            this.method_5("150");
         }
         else if(this.gfx.currentLabel == "stopMusic")
         {
            this.SoundMixer.stopAll();
         }
         else if(this.gfx.currentLabel == "end_intro")
         {
            this.remove_Me();
         }
         return false;
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         if(Boolean(param1.target) && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            if(_loc2_.name == "butt_next")
            {
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip")
            {
               this.remove_Me();
               return true;
            }
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_Intro_5();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_BG.visible = true;
         this.var_3.gfx_UI.visible = true;
         this.var_3.start_Level();
      
}}},
"class_1026":{parent:"popup",fields:{"var_3":function(){return null;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "billMusic", "movie_scene_intro_13"],methods:{"class_1026":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         if(this.var_3)
         {
            this.var_3.gfx_BG.visible = false;
            this.var_3.gfx_UI.visible = false;
         }
         if(this.main.playerProfile.lastLevelVisited < 13 && this.main.playerProfile.levelUnlocked < 13)
         {
            this.gfx.butt_skip.visible = false;
         }
      
},"method_193":function(){
         var _loc3_ = null;
         this.SoundMixer.stopAll();
         var _loc1_ = new this.billMusic();
         var _loc2_ = _loc1_.play(0,10);
         if(_loc2_)
         {
            _loc3_ = new this.SoundTransform(this.class_1.var_25);
            _loc2_.soundTransform = _loc3_;
         }
      
},"run":function(param1 = null){
         if(this.gfx.currentLabel == "showBG")
         {
            this.var_3.gfx_BG.visible = true;
         }
         else if(this.gfx.currentLabel == "bill")
         {
            this.method_193();
         }
         return false;
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         if(Boolean(param1.target) && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            if(_loc2_.name == "butt_next")
            {
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip")
            {
               this.remove_Me();
               return true;
            }
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_intro_13();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_BG.visible = true;
         this.var_3.gfx_UI.visible = true;
         this.var_3.start_Level();
      
}}},
"class_1027":{parent:"popup",fields:{"var_49":function(){return null;},"var_3":function(){return null;}},imports:["MovieClip", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_Win_13", "victory_song"],methods:{"class_1027":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         this.var_3.hit_Play(true);
         this.var_3.hide_UI();
         this.method_182();
      
},"method_182":function(){
         var _loc3_ = null;
         this.SoundMixer.stopAll();
         var _loc1_ = new this.victory_song();
         var _loc2_ = _loc1_.play(0,10);
         if(_loc2_)
         {
            _loc3_ = new this.SoundTransform(this.class_1.var_25);
            _loc2_.soundTransform = _loc3_;
         }
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(!_loc2_)
         {
            return false;
         }
         if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_Win_13();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.end_Level();
      
}}},
"class_1028":{parent:"popup",fields:{"var_49":function(){return null;},"var_3":function(){return null;}},imports:["MovieClip", "MouseEvent", "SoundMixer"],constructors:["movie_scene_Challenge_Intro_4"],methods:{"class_1028":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         if(this.var_3)
         {
            this.var_3.gfx_UI.visible = false;
         }
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(!_loc2_)
         {
            return false;
         }
         if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_Challenge_Intro_4();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_UI.visible = true;
         this.var_3.start_Level();
      
}}},
"class_1029":{parent:"popup",fields:{"var_49":function(){return null;},"var_3":function(){return null;}},imports:["MovieClip", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_Challenge_Win_4", "victory_gym_song"],methods:{"class_1029":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         this.var_3.hit_Play(true);
         this.var_3.hide_UI();
         this.method_182();
      
},"method_182":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.victory_gym_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(!_loc2_)
         {
            return false;
         }
         if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_Challenge_Win_4();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.end_Level();
      
}}},
"class_1030":{parent:"popup",fields:{"var_49":function(){return null;},"var_3":function(){return null;}},imports:["MovieClip", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_Level_24_Win", "victory_song"],methods:{"class_1030":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         this.var_3.hit_Play(true);
         this.var_3.hide_UI();
         this.method_182();
      
},"method_182":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.victory_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(!_loc2_)
         {
            return false;
         }
         if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_Level_24_Win();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.end_Level();
      
}}},
"class_1031":{parent:"popup",fields:{"var_3":function(){return null;},"var_22":function(){return 1;},"var_21":function(){return null;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_intro_24", "pokeTowerMusic"],methods:{"class_1031":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         if(this.var_3)
         {
            this.var_3.gfx_BG.visible = false;
            this.var_3.gfx_UI.visible = false;
         }
         if(this.main.playerProfile.lastLevelVisited < 24 && this.main.playerProfile.levelUnlocked < 24)
         {
            this.gfx.butt_skip.visible = false;
         }
         if(this.main.playerProfile.myAvatarGender)
         {
            this.var_21 = this.main.playerProfile.myAvatarGender;
            this.var_22 = this.main.playerProfile.myAvatarStyle;
         }
         this.gfx.addEventListener("frameConstructed",this.method_8);
      
},"method_285":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.pokeTowerMusic();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"run":function(param1 = null){
         if(this.gfx.currentLabel == "pokeTower")
         {
            this.method_285();
         }
         else if(this.gfx.currentLabel == "gengar")
         {
            this.method_5("094");
         }
         return false;
      
},"method_8":function(param1){
         var _loc2_ = this.var_21 + "_" + this.var_22;
         if(Boolean(this.gfx.yourAvatar) && this.gfx.yourAvatar.currentLabel != _loc2_)
         {
            this.gfx.yourAvatar.gotoAndStop(_loc2_);
         }
         else if(Boolean(this.gfx.yourAvatarWalk) && this.gfx.yourAvatarWalk.currentLabel != _loc2_)
         {
            this.gfx.yourAvatarWalk.gotoAndPlay(_loc2_);
         }
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         if(Boolean(param1.target) && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            if(_loc2_.name == "butt_next")
            {
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip")
            {
               this.remove_Me();
               return true;
            }
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_intro_24();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_BG.visible = true;
         this.var_3.gfx_UI.visible = true;
         this.var_3.start_Level();
      
}}},
"class_1032":{parent:"popup",fields:{"var_49":function(){return null;},"var_3":function(){return null;}},imports:["MovieClip", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_Win_8", "victory_song"],methods:{"class_1032":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         this.var_3.hit_Play(true);
         this.var_3.hide_UI();
         this.method_182();
      
},"method_182":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.victory_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(!_loc2_)
         {
            return false;
         }
         if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_Win_8();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.end_Level();
      
}}},
"class_1033":{parent:"popup",fields:{"var_3":function(){return null;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "gymMusic", "movie_scene_intro_8"],methods:{"class_1033":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         if(this.var_3)
         {
            this.var_3.gfx_BG.visible = false;
            this.var_3.gfx_UI.visible = false;
         }
         if(this.main.playerProfile.lastLevelVisited < 8 && this.main.playerProfile.levelUnlocked < 8)
         {
            this.gfx.butt_skip.visible = false;
         }
      
},"method_217":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.gymMusic();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"run":function(param1 = null){
         if(this.gfx.currentLabel == "gym")
         {
            this.method_217();
         }
         else if(this.gfx.currentLabel == "zubat" || this.gfx.currentLabel == "zubat2" || this.gfx.currentLabel == "zubat3")
         {
            this.method_5("041");
         }
         else if(this.gfx.currentLabel == "pikachu")
         {
            this.method_5("025");
         }
         else if(this.gfx.currentLabel == "onix")
         {
            this.method_5("095");
         }
         return false;
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         if(Boolean(param1.target) && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            if(_loc2_.name == "butt_next")
            {
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip")
            {
               this.remove_Me();
               return true;
            }
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_intro_8();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_BG.visible = true;
         this.var_3.gfx_UI.visible = true;
         this.var_3.start_Level();
      
}}},
"class_1034":{parent:"popup",fields:{"var_49":function(){return null;},"var_3":function(){return null;}},imports:["MovieClip", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_Win_11", "victory_song"],methods:{"class_1034":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         this.var_3.hit_Play(true);
         this.var_3.hide_UI();
         this.method_182();
      
},"method_182":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.victory_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(!_loc2_)
         {
            return false;
         }
         if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_Win_11();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         if(this.main.playerProfile.badges < 2)
         {
            this.main.playerProfile.badges = 2;
         }
         this.var_3.end_Level();
      
}}},
"class_1035":{parent:"popup",fields:{"var_3":function(){return null;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "billMusic", "ceruleanMusic", "lastBattle", "movie_scene_intro_12"],methods:{"class_1035":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         if(this.var_3)
         {
            this.var_3.gfx_BG.visible = false;
            this.var_3.gfx_UI.visible = false;
         }
         if(this.main.playerProfile.lastLevelVisited < 12 && this.main.playerProfile.levelUnlocked < 12)
         {
            this.gfx.butt_skip.visible = false;
         }
      
},"method_302":function(){
         var _loc3_ = null;
         this.SoundMixer.stopAll();
         var _loc1_ = new this.ceruleanMusic();
         var _loc2_ = _loc1_.play(0,10);
         if(_loc2_)
         {
            _loc3_ = new this.SoundTransform(this.class_1.var_25);
            _loc2_.soundTransform = _loc3_;
         }
      
},"method_193":function(){
         var _loc3_ = null;
         this.SoundMixer.stopAll();
         var _loc1_ = new this.billMusic();
         var _loc2_ = _loc1_.play(0,10);
         if(_loc2_)
         {
            _loc3_ = new this.SoundTransform(this.class_1.var_25);
            _loc2_.soundTransform = _loc3_;
         }
      
},"method_361":function(){
         var _loc3_ = null;
         this.SoundMixer.stopAll();
         var _loc1_ = new this.lastBattle();
         var _loc2_ = _loc1_.play(0,10);
         if(_loc2_)
         {
            _loc3_ = new this.SoundTransform(this.class_1.var_25);
            _loc2_.soundTransform = _loc3_;
         }
      
},"run":function(param1 = null){
         if(this.gfx.currentLabel == "lastBattle")
         {
            this.method_361();
         }
         else if(this.gfx.currentLabel == "mewtwo" || this.gfx.currentLabel == "mewtwo_2")
         {
            this.method_5("150");
         }
         else if(this.gfx.currentLabel == "tauros")
         {
            this.method_5("128");
         }
         else if(this.gfx.currentLabel == "charizard")
         {
            this.method_5("006");
         }
         else if(this.gfx.currentLabel == "squirtle")
         {
            this.method_5("007");
         }
         else if(this.gfx.currentLabel == "cerulean")
         {
            this.method_302();
         }
         else if(this.gfx.currentLabel == "bill")
         {
            this.method_193();
         }
         return false;
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         if(Boolean(param1.target) && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            if(_loc2_.name == "butt_next")
            {
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip")
            {
               this.remove_Me();
               return true;
            }
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_intro_12();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_BG.visible = true;
         this.var_3.gfx_UI.visible = true;
         this.var_3.start_Level();
      
}}},
"class_1036":{parent:"popup",fields:{"var_3":function(){return null;},"var_22":function(){return 1;},"var_21":function(){return null;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "cinnabarMusic", "movie_scene_intro_32", "oceanMusic"],methods:{"class_1036":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         if(this.var_3)
         {
            this.var_3.gfx_BG.visible = false;
            this.var_3.gfx_UI.visible = false;
         }
         if(this.main.playerProfile.lastLevelVisited < 32 && this.main.playerProfile.levelUnlocked < 32)
         {
            this.gfx.butt_skip.visible = false;
         }
         if(this.main.playerProfile.myAvatarGender)
         {
            this.var_21 = this.main.playerProfile.myAvatarGender;
            this.var_22 = this.main.playerProfile.myAvatarStyle;
         }
         this.gfx.addEventListener("frameConstructed",this.method_8);
      
},"method_199":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.cinnabarMusic();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_213":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.oceanMusic();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"run":function(param1 = null){
         if(this.gfx.currentLabel == "island")
         {
            this.method_199();
         }
         else if(this.gfx.currentLabel == "ocean")
         {
            this.method_213();
         }
         return false;
      
},"method_8":function(param1){
         var _loc2_ = this.var_21 + "_" + this.var_22;
         if(Boolean(this.gfx.yourAvatar) && this.gfx.yourAvatar.currentLabel != _loc2_)
         {
            this.gfx.yourAvatar.gotoAndStop(_loc2_);
         }
         else if(Boolean(this.gfx.yourAvatarWalk) && this.gfx.yourAvatarWalk.currentLabel != _loc2_)
         {
            this.gfx.yourAvatarWalk.gotoAndPlay(_loc2_);
         }
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         if(Boolean(param1.target) && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            if(_loc2_.name == "butt_next")
            {
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip")
            {
               this.remove_Me();
               return true;
            }
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_intro_32();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_BG.visible = true;
         this.var_3.gfx_UI.visible = true;
         this.var_3.start_Level();
      
}}},
"class_1037":{parent:"popup",fields:{"var_49":function(){return null;},"var_3":function(){return null;},"var_276":function(){return false;}},imports:["MovieClip", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_Level_32_Win", "profile_poke", "profile_poke_val", "victory_song"],methods:{"class_1037":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         this.var_3.hit_Play(true);
         this.var_3.hide_UI();
         this.method_182();
         if(!this.var_3.var_334)
         {
            if(this.var_3.var_556)
            {
               this.gfx.actual.gotoAndStop("aero");
               this.method_106();
               return;
            }
            this.gfx.actual.gotoAndStop("end");
         }
      
},"method_182":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.victory_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(!_loc2_)
         {
            return false;
         }
         if(_loc2_.name == "butt_next")
         {
            this.gfx.actual.play();
         }
         else if(_loc2_.name == "butt_kabuto")
         {
            if(!this.var_276)
            {
               this.var_276 = true;
               this.method_111();
            }
            this.gfx.actual.play();
         }
         else if(_loc2_.name == "butt_omanyte")
         {
            if(!this.var_276)
            {
               this.var_276 = true;
               this.method_113();
            }
            this.gfx.actual.play();
         }
         else if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"method_111":function(){
         var _loc1_ = null;
         _loc1_ = new this.profile_poke();
         _loc1_.num = 140;
         this.finder_Poke_Info.get_Poke_Info(_loc1_);
         _loc1_.level = 1;
         _loc1_.move1 = 6;
         _loc1_.numMoves = 1;
         _loc1_.moveSelected = 1;
         _loc1_.id = ++this.main.playerProfile.latestID;
         _loc1_.experience = 0;
         _loc1_.var_179 = _loc1_.level;
         _loc1_.var_175 = _loc1_.num;
         _loc1_.val = new this.profile_poke_val();
         _loc1_.saveInfo.needCaptured = true;
         _loc1_.saveInfo.extra = 154;
         _loc1_.val.reset(_loc1_);
         if(_loc1_.name != "Kabuto")
         {
            return;
         }
         this.main.playerProfile.update_Pokedex(_loc1_);
         this.main.playerProfile.pokeList.push(_loc1_);
      
},"method_113":function(){
         var _loc1_ = new this.profile_poke();
         _loc1_.num = 138;
         this.finder_Poke_Info.get_Poke_Info(_loc1_);
         _loc1_.level = 1;
         _loc1_.move1 = 201;
         _loc1_.numMoves = 1;
         _loc1_.moveSelected = 1;
         _loc1_.id = ++this.main.playerProfile.latestID;
         _loc1_.experience = 0;
         _loc1_.var_179 = _loc1_.level;
         _loc1_.var_175 = _loc1_.num;
         _loc1_.val = new this.profile_poke_val();
         _loc1_.saveInfo.needCaptured = true;
         _loc1_.saveInfo.extra = 154;
         _loc1_.val.reset(_loc1_);
         if(_loc1_.name != "Omanyte")
         {
            return;
         }
         this.main.playerProfile.update_Pokedex(_loc1_);
         this.main.playerProfile.pokeList.push(_loc1_);
      
},"method_106":function(){
         this.main.playerProfile.addExtraInfo(29);
         var _loc1_ = new this.profile_poke();
         _loc1_.num = 142;
         this.finder_Poke_Info.get_Poke_Info(_loc1_);
         _loc1_.level = 1;
         _loc1_.move1 = 75;
         _loc1_.numMoves = 1;
         _loc1_.moveSelected = 1;
         _loc1_.id = ++this.main.playerProfile.latestID;
         _loc1_.experience = 0;
         _loc1_.var_179 = _loc1_.level;
         _loc1_.var_175 = _loc1_.num;
         _loc1_.val = new this.profile_poke_val();
         _loc1_.saveInfo.needCaptured = true;
         _loc1_.saveInfo.extra = 154;
         _loc1_.val.reset(_loc1_);
         if(_loc1_.name != "Aerodactyl")
         {
            return;
         }
         this.main.playerProfile.update_Pokedex(_loc1_);
         this.main.playerProfile.pokeList.push(_loc1_);
      
},"get_Graphic":function(){
         return new this.movie_scene_Level_32_Win();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.end_Level();
      
}}},
"class_1038":{parent:"popup",fields:{"var_3":function(){return null;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "gymMusic", "movie_scene_win_10", "mt_moon_song", "regularHitSound", "route4Music"],methods:{"class_1038":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.var_3.hit_Play(true);
         this.var_3.hide_UI();
         this.var_3.gfx_BG.visible = false;
         if(this.main.playerProfile.levelUnlocked < 10)
         {
            this.gfx.butt_skip.visible = false;
         }
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         if(param1.target && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            if(_loc2_.name == "butt_next")
            {
               if(this.gfx.currentLabel == "trade_time")
               {
                  if(this.var_3.var_640 && (this.main.playerProfile.clevel1CodeUsed.length < 2 || this.main.playerProfile.clevel1CodeUsed.charAt(1) != "1"))
                  {
                     this.gfx.play();
                  }
                  else
                  {
                     this.gfx.gotoAndPlay("after_trade");
                  }
                  return true;
               }
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip")
            {
               this.remove_Me();
               return true;
            }
            if(_loc2_.name == "butt_yes")
            {
               this.method_352();
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "butt_no")
            {
               this.gfx.play();
               return true;
            }
         }
         return false;
      
},"method_352":function(){
         var _loc1_ = this.var_3.var_640;
         _loc1_.num = 124;
         _loc1_.level = 1;
         _loc1_.experience = 0;
         _loc1_.move1 = 48;
         _loc1_.move2 = 0;
         _loc1_.move3 = 0;
         _loc1_.move4 = 0;
         _loc1_.moveSelected = 1;
         _loc1_.numMoves = 1;
         _loc1_.nickname = "Jynx";
         _loc1_.var_179 = _loc1_.level;
         _loc1_.var_175 = _loc1_.num;
         _loc1_.var_469 = 0;
         _loc1_.var_343 = 0;
         _loc1_.whoMe = "ekm";
         _loc1_.saveInfo.needTrade = true;
         _loc1_.val.reset(_loc1_);
         this.main.playerProfile.update_Pokedex(_loc1_);
         this.finder_Poke_Info.get_Poke_Info(_loc1_);
      
},"method_217":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.gymMusic();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_294":function(){
         var _loc1_ = new this.regularHitSound();
         var _loc2_ = _loc1_.play(0,1);
         var _loc3_ = new this.SoundTransform(this.class_1.var_194);
         _loc2_.soundTransform = _loc3_;
      
},"method_180":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.route4Music();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_218":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.mt_moon_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"run":function(param1 = null){
         if(this.gfx.currentLabel == "gym")
         {
            this.method_217();
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_win_10();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.SoundMixer.stopAll();
         this.var_3.end_Level();
      
}}},
"class_1039":{parent:"popup",fields:{"var_3":function(){return null;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "gymMusic", "movie_scene_intro_10", "mt_moon_song", "regularHitSound", "route4Music"],methods:{"class_1039":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         if(this.var_3)
         {
            this.var_3.gfx_BG.visible = false;
            this.var_3.gfx_UI.visible = false;
         }
         if(this.main.playerProfile.lastLevelVisited < 10 && this.main.playerProfile.levelUnlocked < 10)
         {
            this.gfx.butt_skip.visible = false;
         }
      
},"method_217":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.gymMusic();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_294":function(){
         var _loc1_ = new this.regularHitSound();
         var _loc2_ = _loc1_.play(0,1);
         var _loc3_ = new this.SoundTransform(this.class_1.var_194);
         _loc2_.soundTransform = _loc3_;
      
},"method_180":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.route4Music();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_218":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.mt_moon_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"run":function(param1 = null){
         if(this.gfx.currentLabel == "gym")
         {
            this.method_217();
         }
         else if(this.gfx.currentLabel == "route4")
         {
            this.method_180();
         }
         else if(this.gfx.currentLabel == "mt_moon" || this.gfx.currentLabel == "mt_moon_2")
         {
            this.method_218();
         }
         else if(this.gfx.currentLabel == "beedrill")
         {
            this.method_5("015");
         }
         else if(this.gfx.currentLabel == "starmie")
         {
            this.method_5("121");
         }
         else if(this.gfx.currentLabel == "hit" || this.gfx.currentLabel == "hit_2")
         {
            this.method_294();
         }
         return false;
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         if(Boolean(param1.target) && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            if(_loc2_.name == "butt_next")
            {
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip")
            {
               this.remove_Me();
               return true;
            }
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_intro_10();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_BG.visible = true;
         this.var_3.gfx_UI.visible = true;
         this.var_3.start_Level();
      
}}},
"class_1040":{parent:"popup",fields:{"var_3":function(){return null;},"var_22":function(){return 1;},"var_21":function(){return null;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "ash_song", "cityMusic", "movie_scene_intro_36"],methods:{"class_1040":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         if(this.var_3)
         {
            this.var_3.gfx_BG.visible = false;
            this.var_3.gfx_UI.visible = false;
         }
         if(this.main.playerProfile.lastLevelVisited < 36 && this.main.playerProfile.levelUnlocked < 36)
         {
            this.gfx.butt_skip.visible = false;
         }
         if(this.main.playerProfile.myAvatarGender)
         {
            this.var_21 = this.main.playerProfile.myAvatarGender;
            this.var_22 = this.main.playerProfile.myAvatarStyle;
         }
         this.gfx.addEventListener("frameConstructed",this.method_8);
      
},"method_199":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.ash_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_275":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.cityMusic();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"run":function(param1 = null){
         if(this.gfx.currentLabel == "city")
         {
            this.method_275();
         }
         return false;
      
},"method_8":function(param1){
         var _loc2_ = this.var_21 + "_" + this.var_22;
         if(Boolean(this.gfx.yourAvatar) && this.gfx.yourAvatar.currentLabel != _loc2_)
         {
            this.gfx.yourAvatar.gotoAndStop(_loc2_);
         }
         else if(Boolean(this.gfx.yourAvatarWalk) && this.gfx.yourAvatarWalk.currentLabel != _loc2_)
         {
            this.gfx.yourAvatarWalk.gotoAndPlay(_loc2_);
         }
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         if(Boolean(param1.target) && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            if(_loc2_.name == "butt_next")
            {
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip")
            {
               this.remove_Me();
               return true;
            }
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_intro_36();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_BG.visible = true;
         this.var_3.gfx_UI.visible = true;
         this.var_3.start_Level();
      
}}},
"class_1041":{parent:"popup",fields:{"var_49":function(){return null;},"var_3":function(){return null;},"var_276":function(){return false;},"var_703":function(){return null;}},imports:["MovieClip", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "cityMusic", "movie_scene_Level_36_Win", "victory_song"],methods:{"class_1041":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         this.var_3.hit_Play(true);
         this.var_3.hide_UI();
         this.method_275();
         this.var_3.gfx_BG.visible = false;
         if(this.main.playerProfile.levelUnlocked < 36)
         {
            this.gfx.butt_skip.visible = false;
         }
      
},"method_182":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.victory_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_275":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.cityMusic();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         if(Boolean(param1.target) && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            if(_loc2_.name == "butt_next")
            {
               if(this.gfx.currentLabel == "start_trade")
               {
                  if(this.method_216())
                  {
                     this.gfx.play();
                  }
                  else
                  {
                     this.gfx.gotoAndPlay("end_trade");
                  }
                  return true;
               }
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip")
            {
               this.remove_Me();
               return true;
            }
            if(_loc2_.name == "butt_yes")
            {
               this.method_234();
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "butt_no")
            {
               this.gfx.play();
               return true;
            }
         }
         return false;
      
},"method_216":function(){
         var _loc1_ = null;
         var _loc2_ = Math.trunc(0);
         while(_loc2_ < this.main.playerProfile.partyList.length)
         {
            _loc1_ = this.main.playerProfile.partyList[_loc2_];
            if(_loc1_)
            {
               if(_loc1_.num == 80)
               {
                  this.var_703 = _loc1_;
                  return true;
               }
            }
            _loc2_++;
         }
         return false;
      
},"method_234":function(){
         var _loc1_ = this.var_703;
         _loc1_.num = 108;
         _loc1_.level = 1;
         _loc1_.experience = 0;
         _loc1_.move1 = 119;
         _loc1_.move2 = 0;
         _loc1_.move3 = 0;
         _loc1_.move4 = 0;
         _loc1_.moveSelected = 1;
         _loc1_.numMoves = 1;
         _loc1_.nickname = "Lickitung";
         _loc1_.var_179 = _loc1_.level;
         _loc1_.var_175 = _loc1_.num;
         _loc1_.var_469 = 0;
         _loc1_.var_343 = 0;
         _loc1_.whoMe = "ejb";
         _loc1_.saveInfo.needTrade = true;
         _loc1_.val.reset(_loc1_);
         this.main.playerProfile.update_Pokedex(_loc1_);
         this.finder_Poke_Info.get_Poke_Info(_loc1_);
      
},"get_Graphic":function(){
         return new this.movie_scene_Level_36_Win();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         if(this.main.playerProfile.badges < 8)
         {
            this.main.playerProfile.badges = 8;
         }
         this.var_3.end_Level();
      
}}},
"class_1042":{parent:"popup",fields:{"var_3":function(){return null;},"var_22":function(){return 1;},"var_21":function(){return null;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "ash_song", "movie_scene_Level_42_Intro", "route4Music"],methods:{"class_1042":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         if(this.var_3)
         {
            this.var_3.gfx_BG.visible = false;
            this.var_3.gfx_UI.visible = false;
         }
         if(this.main.playerProfile.myAvatarGender)
         {
            this.var_21 = this.main.playerProfile.myAvatarGender;
            this.var_22 = this.main.playerProfile.myAvatarStyle;
         }
         this.gfx.actual.addEventListener("frameConstructed",this.method_8);
      
},"method_222":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.route4Music();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_205":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.ash_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"run":function(param1 = null){
         if(this.gfx.currentLabel == "ash_song")
         {
            this.method_205();
         }
         return false;
      
},"method_8":function(param1){
         var _loc2_ = this.var_21 + "_" + this.var_22;
         if(Boolean(this.gfx.actual.yourAvatar) && this.gfx.actual.yourAvatar.currentLabel != _loc2_)
         {
            this.gfx.actual.yourAvatar.gotoAndStop(_loc2_);
         }
         else if(Boolean(this.gfx.actual.yourAvatarWalk) && this.gfx.actual.yourAvatarWalk.currentLabel != _loc2_)
         {
            this.gfx.actual.yourAvatarWalk.gotoAndPlay(_loc2_);
         }
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         var _loc3_ = null;
         if(Boolean(param1.target) && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            _loc3_ = this.gfx.currentLabel;
            if(_loc2_.name == "butt_next")
            {
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip" || _loc2_.name == "butt_end")
            {
               this.remove_Me();
               return true;
            }
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_Level_42_Intro();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_BG.visible = true;
         this.var_3.gfx_UI.visible = true;
         this.var_3.start_Level();
      
}}},
"class_1043":{parent:"popup",fields:{"var_49":function(){return null;},"var_3":function(){return null;},"var_22":function(){return 1;},"var_21":function(){return null;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_Level_42_Win", "victory_song"],methods:{"class_1043":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         this.var_3.hit_Play(true);
         this.var_3.hide_UI();
         this.method_182();
         if(this.main.playerProfile.myAvatarGender)
         {
            this.var_21 = this.main.playerProfile.myAvatarGender;
            this.var_22 = this.main.playerProfile.myAvatarStyle;
         }
         this.gfx.actual.addEventListener("frameConstructed",this.method_8);
      
},"method_8":function(param1){
         var _loc2_ = this.var_21 + "_" + this.var_22;
         if(Boolean(this.gfx.actual.yourAvatar) && this.gfx.actual.yourAvatar.currentLabel != _loc2_)
         {
            this.gfx.actual.yourAvatar.gotoAndStop(_loc2_);
         }
         else if(Boolean(this.gfx.actual.yourAvatarWalk) && this.gfx.actual.yourAvatarWalk.currentLabel != _loc2_)
         {
            this.gfx.actual.yourAvatarWalk.gotoAndPlay(_loc2_);
         }
      
},"method_182":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.victory_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(!_loc2_)
         {
            return false;
         }
         if(_loc2_.name == "butt_next")
         {
            this.gfx.actual.play();
            return true;
         }
         if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_Level_42_Win();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.end_Level();
      
}}},
"class_1044":{parent:"popup",fields:{"var_49":function(){return null;},"var_3":function(){return null;},"var_276":function(){return false;}},imports:["MovieClip", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_Level_34_Win", "victory_song"],methods:{"class_1044":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         this.var_3.hit_Play(true);
         this.var_3.hide_UI();
         this.method_182();
      
},"method_182":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.victory_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(!_loc2_)
         {
            return false;
         }
         if(_loc2_.name == "butt_next")
         {
            this.gfx.actual.play();
         }
         else if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_Level_34_Win();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.end_Level();
      
}}},
"class_1045":{parent:"popup",fields:{"var_3":function(){return null;},"var_22":function(){return 1;},"var_21":function(){return null;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "cinnabarMusic", "movie_scene_intro_34", "palletMusic"],methods:{"class_1045":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         if(this.var_3)
         {
            this.var_3.gfx_BG.visible = false;
            this.var_3.gfx_UI.visible = false;
         }
         if(this.main.playerProfile.lastLevelVisited < 34 && this.main.playerProfile.levelUnlocked < 34)
         {
            this.gfx.butt_skip.visible = false;
         }
         if(this.main.playerProfile.myAvatarGender)
         {
            this.var_21 = this.main.playerProfile.myAvatarGender;
            this.var_22 = this.main.playerProfile.myAvatarStyle;
         }
         this.gfx.addEventListener("frameConstructed",this.method_8);
      
},"method_199":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.cinnabarMusic();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_275":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.palletMusic();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"run":function(param1 = null){
         if(this.gfx.currentLabel == "island")
         {
            this.method_199();
         }
         else if(this.gfx.currentLabel == "pallet")
         {
            this.method_275();
         }
         return false;
      
},"method_8":function(param1){
         var _loc2_ = this.var_21 + "_" + this.var_22;
         if(Boolean(this.gfx.yourAvatar) && this.gfx.yourAvatar.currentLabel != _loc2_)
         {
            this.gfx.yourAvatar.gotoAndStop(_loc2_);
         }
         else if(Boolean(this.gfx.yourAvatarWalk) && this.gfx.yourAvatarWalk.currentLabel != _loc2_)
         {
            this.gfx.yourAvatarWalk.gotoAndPlay(_loc2_);
         }
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         if(Boolean(param1.target) && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            if(_loc2_.name == "butt_next")
            {
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip")
            {
               this.remove_Me();
               return true;
            }
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_intro_34();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         if(this.main.playerProfile.badges < 7)
         {
            this.main.playerProfile.badges = 7;
         }
         this.var_3.gfx_BG.visible = true;
         this.var_3.gfx_UI.visible = true;
         this.var_3.start_Level();
      
}}},
"class_1046":{parent:"popup",fields:{"var_3":function(){return null;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_intro_7", "viridianForestSong"],methods:{"class_1046":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         if(this.var_3)
         {
            this.var_3.gfx_UI.visible = false;
         }
         if(this.main.playerProfile.lastLevelVisited < 7 && this.main.playerProfile.levelUnlocked < 7)
         {
            this.gfx.butt_skip.visible = false;
         }
      
},"method_324":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.viridianForestSong();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"run":function(param1 = null){
         if(this.gfx.currentLabel == "forest")
         {
            this.method_324();
         }
         else if(this.gfx.currentLabel == "butterfree" || this.gfx.currentLabel == "butterfree2")
         {
            this.method_5("012");
         }
         else if(this.gfx.currentLabel == "pikachu" || this.gfx.currentLabel == "pikachu2")
         {
            this.method_5("025");
         }
         return false;
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         if(Boolean(param1.target) && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            if(_loc2_.name == "butt_next")
            {
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip")
            {
               this.remove_Me();
               return true;
            }
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_intro_7();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_UI.visible = true;
         this.var_3.start_Level();
      
}}},
"class_1047":{parent:"popup",fields:{"var_3":function(){return null;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "battleWildMusic", "movie_scene_win_7", "victory_song", "viridianForestSong"],methods:{"class_1047":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         if(this.var_3)
         {
            this.var_3.gfx_BG.visible = false;
            this.var_3.gfx_UI.visible = false;
         }
         if(this.main.playerProfile.levelUnlocked < 7)
         {
            this.gfx.butt_skip.visible = false;
         }
      
},"method_324":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.viridianForestSong();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_412":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.battleWildMusic();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_182":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.victory_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"run":function(param1 = null){
         if(this.gfx.currentLabel == "forest")
         {
            this.method_324();
         }
         else if(this.gfx.currentLabel == "battle")
         {
            this.method_412();
         }
         else if(this.gfx.currentLabel == "victory")
         {
            this.method_182();
         }
         else if(this.gfx.currentLabel == "rattata")
         {
            this.method_5("019");
         }
         else if(this.gfx.currentLabel == "pikachu")
         {
            this.method_5("025");
         }
         return false;
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         if(Boolean(param1.target) && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            if(_loc2_.name == "butt_next")
            {
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip")
            {
               this.remove_Me();
               return true;
            }
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_win_7();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.end_Level();
      
}}},
"class_1048":{parent:"popup",fields:{"var_49":function(){return null;},"var_3":function(){return null;}},imports:["MovieClip", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_Level_28_Win", "victory_song"],methods:{"class_1048":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         this.var_3.hit_Play(true);
         this.var_3.hide_UI();
         this.method_182();
      
},"method_182":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.victory_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(!_loc2_)
         {
            return false;
         }
         if(_loc2_.name == "butt_next")
         {
            this.gfx.actual.play();
         }
         else if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_Level_28_Win();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.end_Level();
      
}}},
"class_1049":{parent:"popup",fields:{"var_3":function(){return null;},"var_22":function(){return 1;},"var_21":function(){return null;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "ceruleanMusic", "gymMusic", "movie_scene_intro_28"],methods:{"class_1049":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         if(this.var_3)
         {
            this.var_3.gfx_BG.visible = false;
            this.var_3.gfx_UI.visible = false;
         }
         if(this.main.playerProfile.lastLevelVisited < 28 && this.main.playerProfile.levelUnlocked < 28)
         {
            this.gfx.butt_skip.visible = false;
         }
         if(this.main.playerProfile.myAvatarGender)
         {
            this.var_21 = this.main.playerProfile.myAvatarGender;
            this.var_22 = this.main.playerProfile.myAvatarStyle;
         }
         this.gfx.addEventListener("frameConstructed",this.method_8);
      
},"method_199":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.gymMusic();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_213":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.ceruleanMusic();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"run":function(param1 = null){
         if(this.gfx.currentLabel == "gym")
         {
            this.method_199();
         }
         else if(this.gfx.currentLabel == "city")
         {
            this.method_213();
         }
         return false;
      
},"method_8":function(param1){
         var _loc2_ = this.var_21 + "_" + this.var_22;
         if(Boolean(this.gfx.yourAvatar) && this.gfx.yourAvatar.currentLabel != _loc2_)
         {
            this.gfx.yourAvatar.gotoAndStop(_loc2_);
         }
         else if(Boolean(this.gfx.yourAvatarWalk) && this.gfx.yourAvatarWalk.currentLabel != _loc2_)
         {
            this.gfx.yourAvatarWalk.gotoAndPlay(_loc2_);
         }
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         if(Boolean(param1.target) && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            if(_loc2_.name == "butt_next")
            {
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip")
            {
               this.remove_Me();
               return true;
            }
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_intro_28();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_BG.visible = true;
         this.var_3.gfx_UI.visible = true;
         this.var_3.start_Level();
      
}}},
"class_1050":{parent:"popup",fields:{"var_3":function(){return null;},"var_22":function(){return 1;},"var_21":function(){return null;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "casinoMusic", "lavenderTownMusic", "movie_scene_intro_22"],methods:{"class_1050":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         if(this.var_3)
         {
            this.var_3.gfx_BG.visible = false;
            this.var_3.gfx_UI.visible = false;
         }
         if(this.main.playerProfile.lastLevelVisited < 22 && this.main.playerProfile.levelUnlocked < 22)
         {
            this.gfx.butt_skip.visible = false;
         }
         if(this.main.playerProfile.myAvatarGender)
         {
            this.var_21 = this.main.playerProfile.myAvatarGender;
            this.var_22 = this.main.playerProfile.myAvatarStyle;
         }
         this.gfx.addEventListener("frameConstructed",this.method_8);
      
},"method_374":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.lavenderTownMusic();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_229":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.casinoMusic();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"run":function(param1 = null){
         if(this.gfx.currentLabel == "lavender")
         {
            this.method_374();
         }
         else if(this.gfx.currentLabel == "casino")
         {
            this.method_229();
         }
         else if(this.gfx.currentLabel == "hitmonlee")
         {
            this.method_5("106");
         }
         return false;
      
},"method_8":function(param1){
         var _loc2_ = this.var_21 + "_" + this.var_22;
         if(Boolean(this.gfx.yourAvatar) && this.gfx.yourAvatar.currentLabel != _loc2_)
         {
            this.gfx.yourAvatar.gotoAndStop(_loc2_);
         }
         else if(Boolean(this.gfx.yourAvatarWalk) && this.gfx.yourAvatarWalk.currentLabel != _loc2_)
         {
            this.gfx.yourAvatarWalk.gotoAndPlay(_loc2_);
         }
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         if(Boolean(param1.target) && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            if(_loc2_.name == "butt_next")
            {
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip")
            {
               this.remove_Me();
               return true;
            }
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_intro_22();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_BG.visible = true;
         this.var_3.gfx_UI.visible = true;
         this.var_3.start_Level();
      
}}},
"class_1051":{parent:"popup",fields:{"var_49":function(){return null;},"var_3":function(){return null;}},imports:["MovieClip", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_Level_22_Win", "victory_song"],methods:{"class_1051":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         this.var_3.hit_Play(true);
         this.var_3.hide_UI();
         this.method_182();
      
},"method_182":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.victory_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(!_loc2_)
         {
            return false;
         }
         if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_Level_22_Win();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.end_Level();
      
}}},
"class_1052":{parent:"popup",fields:{"var_3":function(){return null;},"var_22":function(){return 1;},"var_21":function(){return null;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_intro_39", "route4Music"],methods:{"class_1052":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         if(this.var_3)
         {
            this.var_3.gfx_BG.visible = false;
            this.var_3.gfx_UI.visible = false;
         }
         if(this.main.playerProfile.lastLevelVisited < 39 && this.main.playerProfile.levelUnlocked < 39)
         {
            this.gfx.butt_skip.visible = false;
         }
         if(this.main.playerProfile.myAvatarGender)
         {
            this.var_21 = this.main.playerProfile.myAvatarGender;
            this.var_22 = this.main.playerProfile.myAvatarStyle;
         }
         this.gfx.addEventListener("frameConstructed",this.method_8);
      
},"method_222":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.route4Music();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"run":function(param1 = null){
         if(this.gfx.currentLabel == "route4")
         {
            this.method_222();
         }
         else if(this.gfx.currentLabel == "moltres" || this.gfx.currentLabel == "moltres2")
         {
            this.method_5("146");
         }
         return false;
      
},"method_8":function(param1){
         var _loc2_ = this.var_21 + "_" + this.var_22;
         if(Boolean(this.gfx.yourAvatar) && this.gfx.yourAvatar.currentLabel != _loc2_)
         {
            this.gfx.yourAvatar.gotoAndStop(_loc2_);
         }
         else if(Boolean(this.gfx.yourAvatarWalk) && this.gfx.yourAvatarWalk.currentLabel != _loc2_)
         {
            this.gfx.yourAvatarWalk.gotoAndPlay(_loc2_);
         }
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         var _loc3_ = null;
         if(Boolean(param1.target) && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            _loc3_ = this.gfx.currentLabel;
            if(_loc2_.name == "butt_next")
            {
               if(_loc3_ == "descision")
               {
                  this.gfx.gotoAndPlay(this.method_52());
                  return true;
               }
               if(_loc3_ == "d1" || _loc3_ == "d2" || _loc3_ == "d3" || _loc3_ == "d4" || _loc3_ == "d5")
               {
                  this.gfx.gotoAndPlay("end_descision");
                  return true;
               }
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip")
            {
               this.remove_Me();
               return true;
            }
         }
         return false;
      
},"method_52":function(){
         var _loc5_ = null;
         var _loc2_ = Math.trunc(0);
         var _loc1_ = Math.trunc(0);
         var _loc4_ = this.send_Msg("sponsor");
         var _loc3_ = Math.trunc(0);
         while(_loc3_ < this.main.playerProfile.partyList.length)
         {
            _loc5_ = this.main.playerProfile.partyList[_loc3_];
            if(_loc5_)
            {
               if(!(_loc4_ != "hacked" && _loc5_.myTag == "h"))
               {
                  if(_loc5_.is_Type(4))
                  {
                     _loc2_++;
                     if(_loc5_.level == 100)
                     {
                        _loc1_++;
                     }
                  }
               }
            }
            _loc3_++;
         }
         if(!_loc2_)
         {
            return "d1";
         }
         if(!_loc1_ && _loc2_ < 2)
         {
            return "d2";
         }
         if(!_loc1_)
         {
            return "d3";
         }
         if(_loc1_ < 6)
         {
            return "d4";
         }
         if(_loc1_ == 6)
         {
            return "d5";
         }
         return "d1";
      
},"get_Graphic":function(){
         return new this.movie_scene_intro_39();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_BG.visible = true;
         this.var_3.gfx_UI.visible = true;
         this.var_3.start_Level();
      
}}},
"class_1053":{parent:"popup",fields:{"var_49":function(){return null;},"var_3":function(){return null;},"var_22":function(){return 1;},"var_21":function(){return null;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_Level_39_Win", "profile_poke", "profile_poke_val", "victory_song"],methods:{"class_1053":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         this.var_3.hit_Play(true);
         this.var_3.hide_UI();
         this.method_182();
         if(!this.var_3.var_651)
         {
            this.gfx.actual.gotoAndStop(2);
         }
         else
         {
            this.method_223();
         }
         if(this.main.playerProfile.myAvatarGender)
         {
            this.var_21 = this.main.playerProfile.myAvatarGender;
            this.var_22 = this.main.playerProfile.myAvatarStyle;
         }
         this.gfx.actual.addEventListener("frameConstructed",this.method_8);
      
},"method_8":function(param1){
         var _loc2_ = this.var_21 + "_" + this.var_22;
         if(Boolean(this.gfx.actual.yourAvatar) && this.gfx.actual.yourAvatar.currentLabel != _loc2_)
         {
            this.gfx.actual.yourAvatar.gotoAndStop(_loc2_);
         }
         else if(Boolean(this.gfx.actual.yourAvatarWalk) && this.gfx.actual.yourAvatarWalk.currentLabel != _loc2_)
         {
            this.gfx.actual.yourAvatarWalk.gotoAndPlay(_loc2_);
         }
      
},"method_182":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.victory_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(!_loc2_)
         {
            return false;
         }
         if(_loc2_.name == "butt_next")
         {
            this.gfx.actual.play();
            return true;
         }
         if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"method_223":function(){
         var _loc1_ = new this.profile_poke();
         _loc1_.num = 146;
         this.finder_Poke_Info.get_Poke_Info(_loc1_);
         _loc1_.level = 1;
         _loc1_.move1 = 75;
         _loc1_.move2 = 10;
         _loc1_.numMoves = 2;
         _loc1_.moveSelected = 1;
         _loc1_.id = ++this.main.playerProfile.latestID;
         _loc1_.experience = 0;
         _loc1_.var_179 = _loc1_.level;
         _loc1_.var_175 = _loc1_.num;
         _loc1_.shiny = this.method_54();
         var _loc2_ = this.send_Msg("sponsor");
         if(_loc2_ == "hacked")
         {
            _loc1_.myTag = "h";
         }
         _loc1_.val = new this.profile_poke_val();
         _loc1_.saveInfo.needCaptured = true;
         _loc1_.saveInfo.extra = 300;
         this.method_50(_loc1_);
         _loc1_.val.reset(_loc1_);
         if(_loc1_.name != "Moltres")
         {
            return;
         }
         this.main.playerProfile.update_Pokedex(_loc1_);
         this.main.playerProfile.pokeList.push(_loc1_);
      
},"method_54":function(){
         var _loc3_ = null;
         var _loc2_ = Math.trunc(0);
         var _loc1_ = Math.trunc(0);
         var _loc4_ = Math.trunc(0);
         while(_loc4_ < this.main.playerProfile.partyList.length)
         {
            _loc3_ = this.main.playerProfile.partyList[_loc4_];
            if(_loc3_)
            {
               if(_loc3_.shiny == 2)
               {
                  _loc1_++;
               }
               else if(_loc3_.shiny == 1)
               {
                  _loc2_++;
               }
            }
            _loc4_++;
         }
         if(_loc2_ == 6)
         {
            this.main.playerProfile.addExtraInfo(27);
            return 1;
         }
         if(_loc1_ == 6)
         {
            this.main.playerProfile.addExtraInfo(28);
            return 2;
         }
         this.main.playerProfile.addExtraInfo(26);
         return 0;
      
},"get_Graphic":function(){
         return new this.movie_scene_Level_39_Win();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.end_Level();
      
},"method_50":function(param1){
         if(param1.shiny == 2)
         {
            param1.saveInfo.extra = 855;
         }
         else if(param1.shiny == 1)
         {
            param1.saveInfo.extra = 854;
         }
         else
         {
            param1.saveInfo.extra = 857;
         }
      
}}},
"class_1054":{parent:"popup",fields:{"var_3":function(){return null;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "ash_song", "gymMusic", "movie_scene_intro_11"],methods:{"class_1054":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         if(this.var_3)
         {
            this.var_3.gfx_BG.visible = false;
            this.var_3.gfx_UI.visible = false;
         }
         if(this.main.playerProfile.lastLevelVisited < 11 && this.main.playerProfile.levelUnlocked < 11)
         {
            this.gfx.butt_skip.visible = false;
         }
      
},"method_217":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.gymMusic();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_205":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.ash_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"run":function(param1 = null){
         if(this.gfx.currentLabel == "gym")
         {
            this.method_217();
         }
         else if(this.gfx.currentLabel == "mewtwo")
         {
            this.method_5("150");
         }
         else if(this.gfx.currentLabel == "ash")
         {
            this.method_205();
         }
         return false;
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         if(Boolean(param1.target) && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            if(_loc2_.name == "butt_next")
            {
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip")
            {
               this.remove_Me();
               return true;
            }
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_intro_11();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_BG.visible = true;
         this.var_3.gfx_UI.visible = true;
         this.var_3.start_Level();
      
}}},
"class_1055":{parent:"popup",fields:{"var_3":function(){return null;},"var_22":function(){return 1;},"var_21":function(){return null;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "ash_song", "movie_scene_intro_31", "oceanMusic"],methods:{"class_1055":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         if(this.var_3)
         {
            this.var_3.gfx_BG.visible = false;
            this.var_3.gfx_UI.visible = false;
         }
         if(this.main.playerProfile.lastLevelVisited < 31 && this.main.playerProfile.levelUnlocked < 31)
         {
            this.gfx.butt_skip.visible = false;
         }
         if(this.main.playerProfile.myAvatarGender)
         {
            this.var_21 = this.main.playerProfile.myAvatarGender;
            this.var_22 = this.main.playerProfile.myAvatarStyle;
         }
         this.gfx.addEventListener("frameConstructed",this.method_8);
      
},"method_199":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.ash_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_213":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.oceanMusic();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"run":function(param1 = null){
         if(this.gfx.currentLabel == "ash_song")
         {
            this.method_199();
         }
         else if(this.gfx.currentLabel == "ocean")
         {
            this.method_213();
         }
         else if(this.gfx.currentLabel == "zapdos" || this.gfx.currentLabel == "zapdos2")
         {
            this.method_5("145");
         }
         return false;
      
},"method_8":function(param1){
         var _loc2_ = this.var_21 + "_" + this.var_22;
         if(Boolean(this.gfx.yourAvatar) && this.gfx.yourAvatar.currentLabel != _loc2_)
         {
            this.gfx.yourAvatar.gotoAndStop(_loc2_);
         }
         else if(Boolean(this.gfx.yourAvatarWalk) && this.gfx.yourAvatarWalk.currentLabel != _loc2_)
         {
            this.gfx.yourAvatarWalk.gotoAndPlay(_loc2_);
         }
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         if(Boolean(param1.target) && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            if(_loc2_.name == "butt_next")
            {
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip")
            {
               this.remove_Me();
               return true;
            }
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_intro_31();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_BG.visible = true;
         this.var_3.gfx_UI.visible = true;
         this.var_3.start_Level();
      
}}},
"class_1056":{parent:"popup",fields:{"var_49":function(){return null;},"var_3":function(){return null;}},imports:["MovieClip", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_Level_31_Win", "victory_song"],methods:{"class_1056":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         this.var_3.hit_Play(true);
         this.var_3.hide_UI();
         this.method_182();
      
},"method_182":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.victory_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(!_loc2_)
         {
            return false;
         }
         if(_loc2_.name == "butt_next")
         {
            this.gfx.actual.play();
         }
         else if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_Level_31_Win();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.end_Level();
      
}}},
"class_1057":{parent:"popup",fields:{"var_49":function(){return null;},"var_3":function(){return null;}},imports:["MovieClip", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_Level_20_Win", "victory_gym_song"],methods:{"class_1057":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         this.var_3.hit_Play(true);
         this.var_3.hide_UI();
         this.method_182();
      
},"method_182":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.victory_gym_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(!_loc2_)
         {
            return false;
         }
         if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_Level_20_Win();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         if(this.main.playerProfile.badges < 4)
         {
            this.main.playerProfile.badges = 4;
         }
         this.var_3.end_Level();
      
}}},
"class_1058":{parent:"popup",fields:{"var_3":function(){return null;},"var_22":function(){return 1;},"var_21":function(){return null;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "celadonCityMusic", "movie_scene_intro_20"],methods:{"class_1058":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         if(this.var_3)
         {
            this.var_3.gfx_BG.visible = false;
            this.var_3.gfx_UI.visible = false;
         }
         if(this.main.playerProfile.lastLevelVisited < 20 && this.main.playerProfile.levelUnlocked < 20)
         {
            this.gfx.butt_skip.visible = false;
         }
         if(this.main.playerProfile.myAvatarGender)
         {
            this.var_21 = this.main.playerProfile.myAvatarGender;
            this.var_22 = this.main.playerProfile.myAvatarStyle;
         }
         this.gfx.addEventListener("frameConstructed",this.method_8);
      
},"method_307":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.celadonCityMusic();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"run":function(param1 = null){
         if(this.gfx.currentLabel == "celadon")
         {
            this.method_307();
         }
         else if(this.gfx.currentLabel == "dynamic")
         {
            if(!this.gfx.nicknameText)
            {
               return false;
            }
            this.gfx.nicknameText.text = this.main.playerProfile.myName + "! Nice to meet you again!";
         }
         return false;
      
},"method_8":function(param1){
         var _loc2_ = this.var_21 + "_" + this.var_22;
         if(Boolean(this.gfx.yourAvatar) && this.gfx.yourAvatar.currentLabel != _loc2_)
         {
            this.gfx.yourAvatar.gotoAndStop(_loc2_);
         }
         else if(Boolean(this.gfx.yourAvatarWalk) && this.gfx.yourAvatarWalk.currentLabel != _loc2_)
         {
            this.gfx.yourAvatarWalk.gotoAndPlay(_loc2_);
         }
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         if(Boolean(param1.target) && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            if(_loc2_.name == "butt_next")
            {
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip")
            {
               this.remove_Me();
               return true;
            }
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_intro_20();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_BG.visible = true;
         this.var_3.gfx_UI.visible = true;
         this.var_3.start_Level();
      
}}},
"class_1059":{parent:"popup",fields:{"var_49":function(){return null;},"var_3":function(){return null;},"var_22":function(){return 1;},"var_21":function(){return null;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "ash_song", "movie_scene_Level_41_Win"],methods:{"class_1059":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         this.var_3.hit_Play(true);
         this.var_3.hide_UI();
         this.method_182();
         if(this.main.playerProfile.myAvatarGender)
         {
            this.var_21 = this.main.playerProfile.myAvatarGender;
            this.var_22 = this.main.playerProfile.myAvatarStyle;
         }
         if(this.main.playerProfile.lastLevelVisited < 42 && this.main.playerProfile.levelUnlocked < 42)
         {
            this.gfx.butt_skip.visible = false;
         }
         this.gfx.addEventListener("frameConstructed",this.method_8);
      
},"method_8":function(param1){
         var _loc2_ = this.var_21 + "_" + this.var_22;
         if(Boolean(this.gfx.yourAvatar) && this.gfx.yourAvatar.currentLabel != _loc2_)
         {
            this.gfx.yourAvatar.gotoAndStop(_loc2_);
         }
         else if(Boolean(this.gfx.yourAvatarWalk) && this.gfx.yourAvatarWalk.currentLabel != _loc2_)
         {
            this.gfx.yourAvatarWalk.gotoAndPlay(_loc2_);
         }
      
},"method_182":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.ash_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"run":function(param1 = null){
         if(this.gfx.currentLabel == "mewtwo")
         {
            this.method_5("150");
         }
         else if(this.gfx.currentLabel == "pikachu")
         {
            this.method_5("025");
         }
         else if(this.gfx.currentFrame == 60)
         {
            this.SoundMixer.stopAll();
         }
         return false;
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(!_loc2_)
         {
            return false;
         }
         if(_loc2_.name == "butt_next")
         {
            this.gfx.play();
            return true;
         }
         if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip" || _loc2_.name == "butt_close")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_Level_41_Win();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.end_Level();
      
}}},
"class_1060":{parent:"popup",fields:{"var_3":function(){return null;},"var_22":function(){return 1;},"var_21":function(){return null;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "ash_song", "movie_scene_intro_41", "route4Music"],methods:{"class_1060":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         if(this.var_3)
         {
            this.var_3.gfx_BG.visible = false;
            this.var_3.gfx_UI.visible = false;
         }
         if(this.main.playerProfile.lastLevelVisited < 41 && this.main.playerProfile.levelUnlocked < 41)
         {
            this.gfx.butt_skip.visible = false;
         }
         if(this.main.playerProfile.myAvatarGender)
         {
            this.var_21 = this.main.playerProfile.myAvatarGender;
            this.var_22 = this.main.playerProfile.myAvatarStyle;
         }
         this.gfx.addEventListener("frameConstructed",this.method_8);
      
},"method_222":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.route4Music();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_205":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.ash_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"run":function(param1 = null){
         if(this.gfx.currentLabel == "ash_song")
         {
            this.method_205();
         }
         return false;
      
},"method_8":function(param1){
         var _loc2_ = this.var_21 + "_" + this.var_22;
         if(Boolean(this.gfx.yourAvatar) && this.gfx.yourAvatar.currentLabel != _loc2_)
         {
            this.gfx.yourAvatar.gotoAndStop(_loc2_);
         }
         else if(Boolean(this.gfx.yourAvatarWalk) && this.gfx.yourAvatarWalk.currentLabel != _loc2_)
         {
            this.gfx.yourAvatarWalk.gotoAndPlay(_loc2_);
         }
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         var _loc3_ = null;
         if(Boolean(param1.target) && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            _loc3_ = this.gfx.currentLabel;
            if(_loc2_.name == "butt_next")
            {
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip")
            {
               this.remove_Me();
               return true;
            }
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_intro_41();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_BG.visible = true;
         this.var_3.gfx_UI.visible = true;
         this.var_3.start_Level();
      
}}},
"class_1061":{parent:"popup",fields:{"var_49":function(){return null;},"var_3":function(){return null;}},imports:["MovieClip", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_Level_25_Win", "victory_song"],methods:{"class_1061":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         this.var_3.hit_Play(true);
         this.var_3.hide_UI();
         this.method_182();
      
},"method_182":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.victory_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(!_loc2_)
         {
            return false;
         }
         if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_Level_25_Win();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.end_Level();
      
}}},
"class_1062":{parent:"popup",fields:{"var_3":function(){return null;},"var_22":function(){return 1;},"var_21":function(){return null;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "ash_song", "cityMusic", "movie_scene_intro_25"],methods:{"class_1062":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         if(this.var_3)
         {
            this.var_3.gfx_BG.visible = false;
            this.var_3.gfx_UI.visible = false;
         }
         if(this.main.playerProfile.lastLevelVisited < 25 && this.main.playerProfile.levelUnlocked < 25)
         {
            this.gfx.butt_skip.visible = false;
         }
         if(this.main.playerProfile.myAvatarGender)
         {
            this.var_21 = this.main.playerProfile.myAvatarGender;
            this.var_22 = this.main.playerProfile.myAvatarStyle;
         }
         this.gfx.addEventListener("frameConstructed",this.method_8);
      
},"method_210":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.ash_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_213":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.cityMusic();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"run":function(param1 = null){
         if(this.gfx.currentLabel == "final")
         {
            this.method_210();
         }
         else if(this.gfx.currentLabel == "city")
         {
            this.method_213();
         }
         else if(this.gfx.currentLabel == "snorlax" || this.gfx.currentLabel == "snorlax2")
         {
            this.method_5("143");
         }
         else if(this.gfx.currentLabel == "mewtwo")
         {
            this.method_5("150");
         }
         else if(this.gfx.currentLabel == "meowth")
         {
            this.method_5("052");
         }
         else if(this.gfx.currentLabel == "haunter")
         {
            this.method_5("093");
         }
         else if(this.gfx.currentLabel == "gastly")
         {
            this.method_5("092");
         }
         return false;
      
},"method_8":function(param1){
         var _loc2_ = this.var_21 + "_" + this.var_22;
         if(Boolean(this.gfx.yourAvatar) && this.gfx.yourAvatar.currentLabel != _loc2_)
         {
            this.gfx.yourAvatar.gotoAndStop(_loc2_);
         }
         else if(Boolean(this.gfx.yourAvatarWalk) && this.gfx.yourAvatarWalk.currentLabel != _loc2_)
         {
            this.gfx.yourAvatarWalk.gotoAndPlay(_loc2_);
         }
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         if(Boolean(param1.target) && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            if(_loc2_.name == "butt_next")
            {
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip")
            {
               this.remove_Me();
               return true;
            }
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_intro_25();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_BG.visible = true;
         this.var_3.gfx_UI.visible = true;
         this.var_3.start_Level();
      
}}},
"class_1063":{parent:"popup",fields:{"var_49":function(){return null;},"var_3":function(){return null;},"var_22":function(){return 1;},"var_21":function(){return null;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_Level_37_Win", "profile_poke", "profile_poke_val", "victory_song"],methods:{"class_1063":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         this.var_3.hit_Play(true);
         this.var_3.hide_UI();
         this.method_182();
         if(!this.var_3.var_695)
         {
            this.gfx.actual.gotoAndStop(2);
         }
         else
         {
            this.method_380();
         }
         if(this.main.playerProfile.myAvatarGender)
         {
            this.var_21 = this.main.playerProfile.myAvatarGender;
            this.var_22 = this.main.playerProfile.myAvatarStyle;
         }
         this.gfx.actual.addEventListener("frameConstructed",this.method_8);
      
},"method_8":function(param1){
         var _loc2_ = this.var_21 + "_" + this.var_22;
         if(Boolean(this.gfx.actual.yourAvatar) && this.gfx.actual.yourAvatar.currentLabel != _loc2_)
         {
            this.gfx.actual.yourAvatar.gotoAndStop(_loc2_);
         }
         else if(Boolean(this.gfx.actual.yourAvatarWalk) && this.gfx.actual.yourAvatarWalk.currentLabel != _loc2_)
         {
            this.gfx.actual.yourAvatarWalk.gotoAndPlay(_loc2_);
         }
      
},"method_182":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.victory_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(!_loc2_)
         {
            return false;
         }
         if(_loc2_.name == "butt_next")
         {
            this.gfx.actual.play();
            return true;
         }
         if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"method_380":function(){
         var _loc1_ = new this.profile_poke();
         _loc1_.num = 145;
         this.finder_Poke_Info.get_Poke_Info(_loc1_);
         _loc1_.level = 1;
         _loc1_.move1 = 42;
         _loc1_.move2 = 22;
         _loc1_.numMoves = 2;
         _loc1_.moveSelected = 1;
         _loc1_.id = ++this.main.playerProfile.latestID;
         _loc1_.experience = 0;
         _loc1_.var_179 = _loc1_.level;
         _loc1_.var_175 = _loc1_.num;
         _loc1_.shiny = this.method_54();
         var _loc2_ = this.send_Msg("sponsor");
         if(_loc2_ == "hacked")
         {
            _loc1_.myTag = "h";
         }
         _loc1_.val = new this.profile_poke_val();
         _loc1_.saveInfo.needCaptured = true;
         _loc1_.saveInfo.extra = 300;
         this.method_50(_loc1_);
         _loc1_.val.reset(_loc1_);
         if(_loc1_.name != "Zapdos")
         {
            return;
         }
         this.main.playerProfile.update_Pokedex(_loc1_);
         this.main.playerProfile.pokeList.push(_loc1_);
      
},"method_54":function(){
         var _loc3_ = null;
         var _loc2_ = Math.trunc(0);
         var _loc1_ = Math.trunc(0);
         var _loc4_ = Math.trunc(0);
         while(_loc4_ < this.main.playerProfile.partyList.length)
         {
            _loc3_ = this.main.playerProfile.partyList[_loc4_];
            if(_loc3_)
            {
               if(_loc3_.shiny == 2)
               {
                  _loc1_++;
               }
               else if(_loc3_.shiny == 1)
               {
                  _loc2_++;
               }
            }
            _loc4_++;
         }
         if(_loc2_ == 6)
         {
            this.main.playerProfile.addExtraInfo(21);
            return 1;
         }
         if(_loc1_ == 6)
         {
            this.main.playerProfile.addExtraInfo(22);
            return 2;
         }
         this.main.playerProfile.addExtraInfo(20);
         return 0;
      
},"get_Graphic":function(){
         return new this.movie_scene_Level_37_Win();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.end_Level();
      
},"method_50":function(param1){
         if(param1.shiny == 2)
         {
            param1.saveInfo.extra = 855;
         }
         else if(param1.shiny == 1)
         {
            param1.saveInfo.extra = 854;
         }
         else
         {
            param1.saveInfo.extra = 857;
         }
      
}}},
"class_1064":{parent:"popup",fields:{"var_3":function(){return null;},"var_22":function(){return 1;},"var_21":function(){return null;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_intro_37", "route10Music"],methods:{"class_1064":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         if(this.var_3)
         {
            this.var_3.gfx_BG.visible = false;
            this.var_3.gfx_UI.visible = false;
         }
         if(this.main.playerProfile.lastLevelVisited < 37 && this.main.playerProfile.levelUnlocked < 37)
         {
            this.gfx.butt_skip.visible = false;
         }
         if(this.main.playerProfile.myAvatarGender)
         {
            this.var_21 = this.main.playerProfile.myAvatarGender;
            this.var_22 = this.main.playerProfile.myAvatarStyle;
         }
         this.gfx.addEventListener("frameConstructed",this.method_8);
      
},"method_201":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.route10Music();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"run":function(param1 = null){
         if(this.gfx.currentLabel == "route10")
         {
            this.method_201();
         }
         else if(this.gfx.currentLabel == "zapdos" || this.gfx.currentLabel == "zapdos2")
         {
            this.method_5("145");
         }
         return false;
      
},"method_8":function(param1){
         var _loc2_ = this.var_21 + "_" + this.var_22;
         if(Boolean(this.gfx.yourAvatar) && this.gfx.yourAvatar.currentLabel != _loc2_)
         {
            this.gfx.yourAvatar.gotoAndStop(_loc2_);
         }
         else if(Boolean(this.gfx.yourAvatarWalk) && this.gfx.yourAvatarWalk.currentLabel != _loc2_)
         {
            this.gfx.yourAvatarWalk.gotoAndPlay(_loc2_);
         }
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         var _loc3_ = null;
         if(Boolean(param1.target) && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            _loc3_ = this.gfx.currentLabel;
            if(_loc2_.name == "butt_next")
            {
               if(_loc3_ == "descision")
               {
                  this.gfx.gotoAndPlay(this.method_52());
                  return true;
               }
               if(_loc3_ == "d1" || _loc3_ == "d2" || _loc3_ == "d3" || _loc3_ == "d4" || _loc3_ == "d5")
               {
                  this.gfx.gotoAndPlay("end_descision");
                  return true;
               }
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip")
            {
               this.remove_Me();
               return true;
            }
         }
         return false;
      
},"method_52":function(){
         var _loc5_ = null;
         var _loc2_ = Math.trunc(0);
         var _loc1_ = Math.trunc(0);
         var _loc4_ = this.send_Msg("sponsor");
         var _loc3_ = Math.trunc(0);
         while(_loc3_ < this.main.playerProfile.partyList.length)
         {
            _loc5_ = this.main.playerProfile.partyList[_loc3_];
            if(_loc5_)
            {
               if(!(_loc4_ != "hacked" && _loc5_.myTag == "h"))
               {
                  if(_loc5_.is_Type(11))
                  {
                     _loc2_++;
                     if(_loc5_.level == 100)
                     {
                        _loc1_++;
                     }
                  }
               }
            }
            _loc3_++;
         }
         if(!_loc2_)
         {
            return "d1";
         }
         if(!_loc1_ && _loc2_ < 2)
         {
            return "d2";
         }
         if(!_loc1_)
         {
            return "d3";
         }
         if(_loc1_ < 6)
         {
            return "d4";
         }
         if(_loc1_ == 6)
         {
            return "d5";
         }
         return "d1";
      
},"get_Graphic":function(){
         return new this.movie_scene_intro_37();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_BG.visible = true;
         this.var_3.gfx_UI.visible = true;
         this.var_3.start_Level();
      
}}},
"class_1065":{parent:"popup",fields:{"var_3":function(){return null;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_Intro_2", "rival_song", "team_rocket_music"],methods:{"class_1065":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         if(this.var_3)
         {
            this.var_3.gfx_UI.visible = false;
         }
         if(this.main.playerProfile.lastLevelVisited < 2 && this.main.playerProfile.levelUnlocked < 2)
         {
            this.gfx.butt_skip.visible = false;
         }
      
},"method_191":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.rival_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_263":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.team_rocket_music();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"run":function(param1 = null){
         if(this.gfx.currentLabel == "play_Rocket")
         {
            this.method_263();
         }
         else if(this.gfx.currentLabel == "play_Gary")
         {
            this.method_191();
         }
         else if(this.gfx.currentLabel == "pidgey" || this.gfx.currentLabel == "pidgey1" || this.gfx.currentLabel == "pidgey2")
         {
            this.method_5("016");
         }
         else if(this.gfx.currentLabel == "drowsee")
         {
            this.method_5("096");
         }
         else if(this.gfx.currentLabel == "end_intro")
         {
            this.remove_Me();
         }
         return false;
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         if(Boolean(param1.target) && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            if(_loc2_.name == "butt_next")
            {
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip")
            {
               this.remove_Me();
               return true;
            }
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_Intro_2();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_UI.visible = true;
         this.var_3.start_Level();
      
}}},
"class_1066":{parent:"popup",fields:{"var_49":function(){return null;},"var_3":function(){return null;},"var_628":function(){return false;}},imports:["PixelDissolve", "TransitionManager", "None", "MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_win_2", "superEffectiveSound"],methods:{"class_1066":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         this.var_3.hit_Play(true);
         this.var_3.hide_UI();
         this.var_3.gfx_BG.x = 0;
         this.var_3.gfx_BG.y = 0;
         this.var_49 = new this.movie_scene_win_2();
         this.var_3.gfx_BG.addChild(this.var_49);
         this.TransitionManager.start(this.var_49,{
            "type":this.PixelDissolve,
            "direction":0,
            "duration":1,
            "easing":this.None.easeNone,
            "xSections":30,
            "ySections":30
         });
         if(this.main.playerProfile.levelUnlocked < 2)
         {
            this.var_49.butt_skip.visible = false;
         }
      
},"method_314":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.superEffectiveSound();
         var _loc2_ = _loc1_.play(0,1);
         var _loc3_ = new this.SoundTransform(this.class_1.var_194);
         _loc2_.soundTransform = _loc3_;
      
},"run":function(param1 = null){
         if(this.var_49.currentLabel == "pidgey")
         {
            this.method_5("016");
         }
         else if(this.var_49.currentLabel == "drowsee" || this.var_49.currentLabel == "drowsee1")
         {
            this.method_5("096");
         }
         else if(this.var_49.currentLabel == "super")
         {
            this.method_314();
         }
         return false;
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(!_loc2_)
         {
            return false;
         }
         if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         if(_loc2_.name == "butt_next")
         {
            this.var_49.play();
            return true;
         }
         return false;
      
},"get_Graphic":function(){
         return null;
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.end_Level();
      
}}},
"class_1067":{parent:"popup",fields:{"var_49":function(){return null;},"var_3":function(){return null;}},imports:["MovieClip", "MouseEvent", "SoundMixer"],constructors:["movie_scene_Challenge_Intro_2"],methods:{"class_1067":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         if(this.var_3)
         {
            this.var_3.gfx_UI.visible = false;
         }
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(!_loc2_)
         {
            return false;
         }
         if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_Challenge_Intro_2();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_UI.visible = true;
         this.var_3.start_Level();
      
}}},
"class_1068":{parent:"popup",fields:{"var_49":function(){return null;},"var_3":function(){return null;}},imports:["MovieClip", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_Challenge_Win_2", "victory_gym_song"],methods:{"class_1068":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         this.var_3.hit_Play(true);
         this.var_3.hide_UI();
         this.method_182();
      
},"method_182":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.victory_gym_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(!_loc2_)
         {
            return false;
         }
         if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_Challenge_Win_2();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.end_Level();
      
}}},
"class_1069":{parent:"popup",fields:{"var_49":function(){return null;},"var_3":function(){return null;},"var_276":function(){return false;}},imports:["MovieClip", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_Level_26_Win", "profile_poke", "profile_poke_val", "victory_song"],methods:{"class_1069":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         this.var_3.hit_Play(true);
         this.var_3.hide_UI();
         this.method_182();
         if(!this.var_3.var_334)
         {
            this.gfx.actual.gotoAndStop("end");
         }
      
},"method_182":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.victory_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(!_loc2_)
         {
            return false;
         }
         if(_loc2_.name == "butt_next")
         {
            this.gfx.actual.play();
         }
         else if(_loc2_.name == "butt_hitmonlee")
         {
            if(!this.var_276)
            {
               this.var_276 = true;
               this.method_226();
            }
            this.gfx.actual.play();
         }
         else if(_loc2_.name == "butt_hitmonchan")
         {
            if(!this.var_276)
            {
               this.var_276 = true;
               this.method_329();
            }
            this.gfx.actual.play();
         }
         else if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"method_226":function(){
         this.main.playerProfile.addExtraInfo(30);
         var _loc1_ = new this.profile_poke();
         _loc1_.num = 106;
         this.finder_Poke_Info.get_Poke_Info(_loc1_);
         _loc1_.level = 1;
         _loc1_.move1 = 45;
         _loc1_.numMoves = 1;
         _loc1_.moveSelected = 1;
         _loc1_.id = ++this.main.playerProfile.latestID;
         _loc1_.experience = 0;
         _loc1_.var_179 = _loc1_.level;
         _loc1_.var_175 = _loc1_.num;
         _loc1_.val = new this.profile_poke_val();
         _loc1_.saveInfo.needCaptured = true;
         _loc1_.saveInfo.extra = 152;
         _loc1_.val.reset(_loc1_);
         if(_loc1_.name != "Hitmonlee")
         {
            return;
         }
         this.main.playerProfile.update_Pokedex(_loc1_);
         this.main.playerProfile.pokeList.push(_loc1_);
      
},"method_329":function(){
         this.main.playerProfile.addExtraInfo(31);
         var _loc1_ = new this.profile_poke();
         _loc1_.num = 107;
         this.finder_Poke_Info.get_Poke_Info(_loc1_);
         _loc1_.level = 1;
         _loc1_.move1 = 361;
         _loc1_.numMoves = 1;
         _loc1_.moveSelected = 1;
         _loc1_.id = ++this.main.playerProfile.latestID;
         _loc1_.experience = 0;
         _loc1_.var_179 = _loc1_.level;
         _loc1_.var_175 = _loc1_.num;
         _loc1_.val = new this.profile_poke_val();
         _loc1_.saveInfo.needCaptured = true;
         _loc1_.saveInfo.extra = 152;
         _loc1_.val.reset(_loc1_);
         if(_loc1_.name != "Hitmonchan")
         {
            return;
         }
         this.main.playerProfile.update_Pokedex(_loc1_);
         this.main.playerProfile.pokeList.push(_loc1_);
      
},"get_Graphic":function(){
         return new this.movie_scene_Level_26_Win();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.end_Level();
      
}}},
"class_1070":{parent:"popup",fields:{"var_3":function(){return null;},"var_22":function(){return 1;},"var_21":function(){return null;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "ash_song", "cityMusic", "movie_scene_intro_26"],methods:{"class_1070":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         if(this.var_3)
         {
            this.var_3.gfx_BG.visible = false;
            this.var_3.gfx_UI.visible = false;
         }
         if(this.main.playerProfile.lastLevelVisited < 26 && this.main.playerProfile.levelUnlocked < 26)
         {
            this.gfx.butt_skip.visible = false;
         }
         if(this.main.playerProfile.myAvatarGender)
         {
            this.var_21 = this.main.playerProfile.myAvatarGender;
            this.var_22 = this.main.playerProfile.myAvatarStyle;
         }
         if(this.main.playerProfile.badges < 5)
         {
            this.main.playerProfile.badges = 5;
         }
         this.gfx.addEventListener("frameConstructed",this.method_8);
      
},"method_210":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.ash_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_213":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.cityMusic();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"run":function(param1 = null){
         if(this.gfx.currentLabel == "final")
         {
            this.method_210();
         }
         else if(this.gfx.currentLabel == "city")
         {
            this.method_213();
         }
         else if(this.gfx.currentLabel == "snorlax" || this.gfx.currentLabel == "snorlax2")
         {
            this.method_5("143");
         }
         else if(this.gfx.currentLabel == "mewtwo")
         {
            this.method_5("150");
         }
         else if(this.gfx.currentLabel == "meowth")
         {
            this.method_5("052");
         }
         else if(this.gfx.currentLabel == "haunter")
         {
            this.method_5("093");
         }
         else if(this.gfx.currentLabel == "gastly")
         {
            this.method_5("092");
         }
         return false;
      
},"method_8":function(param1){
         var _loc2_ = this.var_21 + "_" + this.var_22;
         if(Boolean(this.gfx.yourAvatar) && this.gfx.yourAvatar.currentLabel != _loc2_)
         {
            this.gfx.yourAvatar.gotoAndStop(_loc2_);
         }
         else if(Boolean(this.gfx.yourAvatarWalk) && this.gfx.yourAvatarWalk.currentLabel != _loc2_)
         {
            this.gfx.yourAvatarWalk.gotoAndPlay(_loc2_);
         }
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         if(Boolean(param1.target) && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            if(_loc2_.name == "butt_next")
            {
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip")
            {
               this.remove_Me();
               return true;
            }
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_intro_26();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_BG.visible = true;
         this.var_3.gfx_UI.visible = true;
         this.var_3.start_Level();
      
}}},
"class_1071":{parent:"popup",fields:{"var_49":function(){return null;},"var_3":function(){return null;}},imports:["MovieClip", "MouseEvent", "SoundMixer"],constructors:["movie_scene_Challenge_Intro_3"],methods:{"class_1071":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         if(this.var_3)
         {
            this.var_3.gfx_UI.visible = false;
         }
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(!_loc2_)
         {
            return false;
         }
         if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_Challenge_Intro_3();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_UI.visible = true;
         this.var_3.start_Level();
      
}}},
"class_1072":{parent:"popup",fields:{"var_49":function(){return null;},"var_3":function(){return null;}},imports:["MovieClip", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_Challenge_Win_3", "victory_gym_song"],methods:{"class_1072":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         this.var_3.hit_Play(true);
         this.var_3.hide_UI();
         this.method_182();
      
},"method_182":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.victory_gym_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(!_loc2_)
         {
            return false;
         }
         if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_Challenge_Win_3();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.end_Level();
      
}}},
"class_1073":{parent:"popup",fields:{"var_49":function(){return null;},"var_3":function(){return null;},"var_542":function(){return false;}},imports:["MovieClip", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_Challenge_Win_1", "victory_gym_song"],methods:{"class_1073":function(param1, param2){
         this.var_3 = param1;
         this.var_542 = param2;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         this.var_3.hit_Play(true);
         this.var_3.hide_UI();
         this.method_182();
      
},"method_182":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.victory_gym_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(!_loc2_)
         {
            return false;
         }
         if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"get_Graphic":function(){
         var _loc1_ = new this.movie_scene_Challenge_Win_1();
         if(this.var_542)
         {
            _loc1_.actual.gotoAndStop(2);
         }
         return _loc1_;
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.end_Level();
      
}}},
"class_1074":{parent:"popup",fields:{"var_49":function(){return null;},"var_3":function(){return null;}},imports:["MovieClip", "MouseEvent", "SoundMixer"],constructors:["movie_scene_Challenge_Intro_1"],methods:{"class_1074":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         if(this.var_3)
         {
            this.var_3.gfx_UI.visible = false;
         }
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(!_loc2_)
         {
            return false;
         }
         if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_Challenge_Intro_1();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_UI.visible = true;
         this.var_3.start_Level();
      
}}},
"class_1075":{parent:"popup",fields:{"var_49":function(){return null;},"var_3":function(){return null;},"var_542":function(){return false;}},imports:["MovieClip", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_Challenge_Win_6", "victory_gym_song"],methods:{"class_1075":function(param1, param2){
         this.var_3 = param1;
         this.var_542 = param2;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         this.var_3.hit_Play(true);
         this.var_3.hide_UI();
         this.method_182();
      
},"method_182":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.victory_gym_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(!_loc2_)
         {
            return false;
         }
         if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"get_Graphic":function(){
         var _loc1_ = new this.movie_scene_Challenge_Win_6();
         if(this.var_542)
         {
            _loc1_.actual.gotoAndStop(2);
         }
         return _loc1_;
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.end_Level();
      
}}},
"class_1076":{parent:"popup",fields:{"var_49":function(){return null;},"var_3":function(){return null;}},imports:["MovieClip", "MouseEvent", "SoundMixer"],constructors:["movie_scene_Challenge_Intro_6"],methods:{"class_1076":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         if(this.var_3)
         {
            this.var_3.gfx_UI.visible = false;
         }
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(!_loc2_)
         {
            return false;
         }
         if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_Challenge_Intro_6();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_UI.visible = true;
         this.var_3.start_Level();
      
}}},
"class_1077":{parent:"popup",fields:{"var_3":function(){return null;},"var_22":function(){return 1;},"var_21":function(){return null;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_Level_40_2_Intro", "victory_gym_song"],methods:{"class_1077":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         if(this.var_3)
         {
            this.var_3.gfx_UI.visible = false;
         }
         if(this.main.playerProfile.myAvatarGender)
         {
            this.var_21 = this.main.playerProfile.myAvatarGender;
            this.var_22 = this.main.playerProfile.myAvatarStyle;
         }
         this.method_317();
      
},"method_317":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.victory_gym_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"run":function(param1 = null){
         return false;
      
},"method_8":function(param1){
         var _loc2_ = this.var_21 + "_" + this.var_22;
         if(Boolean(this.gfx.yourAvatar) && this.gfx.yourAvatar.currentLabel != _loc2_)
         {
            this.gfx.yourAvatar.gotoAndStop(_loc2_);
         }
         else if(Boolean(this.gfx.yourAvatarWalk) && this.gfx.yourAvatarWalk.currentLabel != _loc2_)
         {
            this.gfx.yourAvatarWalk.gotoAndPlay(_loc2_);
         }
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         var _loc3_ = null;
         if(Boolean(param1.target) && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            _loc3_ = this.gfx.currentLabel;
            if(_loc2_.name == "butt_next")
            {
               this.gfx.actual.play();
               return true;
            }
            if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip" || _loc2_.name == "butt_end")
            {
               this.remove_Me();
               return true;
            }
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_Level_40_2_Intro();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_BG.visible = true;
         this.var_3.gfx_UI.visible = true;
         this.SoundMixer.stopAll();
         this.var_3.start_Level();
      
}}},
"class_1078":{parent:"popup",fields:{"var_49":function(){return null;},"var_3":function(){return null;}},imports:["MovieClip", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_Level_12_2_Intro", "victory_gym_song"],methods:{"class_1078":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"method_182":function(){
         var _loc3_ = null;
         var _loc1_ = new this.victory_gym_song();
         var _loc2_ = _loc1_.play(0,10);
         if(_loc2_)
         {
            _loc3_ = new this.SoundTransform(this.class_1.var_25);
            _loc2_.soundTransform = _loc3_;
         }
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         if(this.var_3)
         {
            this.var_3.gfx_UI.visible = false;
            this.method_182();
         }
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(!_loc2_)
         {
            return false;
         }
         if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_Level_12_2_Intro();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_UI.visible = true;
         this.SoundMixer.stopAll();
         this.var_3.start_Level();
      
}}},
"class_1079":{parent:"popup",fields:{"var_3":function(){return null;},"var_22":function(){return 1;},"var_21":function(){return null;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_Level_40_3_Intro", "victory_gym_song"],methods:{"class_1079":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         if(this.var_3)
         {
            this.var_3.gfx_UI.visible = false;
         }
         if(this.main.playerProfile.myAvatarGender)
         {
            this.var_21 = this.main.playerProfile.myAvatarGender;
            this.var_22 = this.main.playerProfile.myAvatarStyle;
         }
         this.method_317();
      
},"method_317":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.victory_gym_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"run":function(param1 = null){
         return false;
      
},"method_8":function(param1){
         var _loc2_ = this.var_21 + "_" + this.var_22;
         if(Boolean(this.gfx.yourAvatar) && this.gfx.yourAvatar.currentLabel != _loc2_)
         {
            this.gfx.yourAvatar.gotoAndStop(_loc2_);
         }
         else if(Boolean(this.gfx.yourAvatarWalk) && this.gfx.yourAvatarWalk.currentLabel != _loc2_)
         {
            this.gfx.yourAvatarWalk.gotoAndPlay(_loc2_);
         }
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         var _loc3_ = null;
         if(Boolean(param1.target) && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            _loc3_ = this.gfx.currentLabel;
            if(_loc2_.name == "butt_next")
            {
               this.gfx.actual.play();
               return true;
            }
            if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip" || _loc2_.name == "butt_end")
            {
               this.remove_Me();
               return true;
            }
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_Level_40_3_Intro();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_BG.visible = true;
         this.var_3.gfx_UI.visible = true;
         this.SoundMixer.stopAll();
         this.var_3.start_Level();
      
}}},
"class_1080":{parent:"popup",fields:{"var_3":function(){return null;},"var_22":function(){return 1;},"var_21":function(){return null;},"var_87":function(){return 0;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "ash_song", "class_954", "class_959", "movie_scene_intro_17_space_2", "mt_moon_song", "route10Music", "trainerEncounterSong"],methods:{"class_1080":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         if(this.var_3)
         {
            this.var_3.gfx_BG.visible = false;
            this.var_3.gfx_UI.visible = false;
         }
         this.gfx.butt_skip.visible = false;
         if(this.main.playerProfile.myAvatarGender)
         {
            this.var_21 = this.main.playerProfile.myAvatarGender;
            this.var_22 = this.main.playerProfile.myAvatarStyle;
         }
         this.gfx.addEventListener("frameConstructed",this.method_8);
         var _loc1_ = this.var_3;
         if(!_loc1_.var_68[1])
         {
            this.gfx.gotoAndPlay("notBeaten");
         }
      
},"method_187":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.trainerEncounterSong();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_127":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.mt_moon_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_205":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.ash_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_201":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.route10Music();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"run":function(param1 = null){
         if(this.gfx.currentLabel == "mtmoon" || this.gfx.currentLabel == "mtmoon2")
         {
            this.method_127();
         }
         else if(this.gfx.currentLabel == "trainer")
         {
            this.method_187();
         }
         else if(this.gfx.currentLabel == "zubat")
         {
            this.method_5("041");
         }
         else if(this.gfx.currentLabel == "route10")
         {
            this.method_201();
         }
         return false;
      
},"method_8":function(param1){
         var _loc2_ = this.var_21 + "_" + this.var_22;
         if(Boolean(this.gfx.yourAvatar) && this.gfx.yourAvatar.currentLabel != _loc2_)
         {
            this.gfx.yourAvatar.gotoAndStop(_loc2_);
         }
         else if(Boolean(this.gfx.yourAvatarWalk) && this.gfx.yourAvatarWalk.currentLabel != _loc2_)
         {
            this.gfx.yourAvatarWalk.gotoAndPlay(_loc2_);
         }
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         var _loc3_ = null;
         var _loc4_ = null;
         if(Boolean(param1.target) && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            if(_loc2_.name == "butt_next")
            {
               if(this.gfx.currentLabel == "startFight")
               {
                  this.remove_Me();
                  return true;
               }
               if(this.gfx.currentLabel == "goToOne")
               {
                  _loc3_ = this.var_3;
                  _loc4_ = new this.class_954(this.var_3.my_Parent,_loc3_.var_68);
                  this.send_Msg(["change_Screen",_loc4_]);
                  return true;
               }
               if(this.gfx.currentLabel == "goToThree")
               {
                  _loc3_ = this.var_3;
                  _loc4_ = new this.class_959(this.var_3.my_Parent,_loc3_.var_68);
                  this.send_Msg(["change_Screen",_loc4_]);
                  return true;
               }
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "btn_left")
            {
               this.gfx.gotoAndPlay("goLeft");
               return true;
            }
            if(_loc2_.name == "btn_up")
            {
               this.gfx.gotoAndPlay("goUp");
               return true;
            }
            if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip")
            {
               this.remove_Me();
               return true;
            }
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_intro_17_space_2();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_BG.visible = true;
         this.var_3.gfx_UI.visible = true;
         this.var_3.start_Level();
      
}}},
"class_1081":{parent:"popup",fields:{"var_49":function(){return null;},"var_3":function(){return null;}},imports:["MovieClip", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_Level_12_3_Intro", "victory_gym_song"],methods:{"class_1081":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"method_182":function(){
         var _loc3_ = null;
         var _loc1_ = new this.victory_gym_song();
         var _loc2_ = _loc1_.play(0,10);
         if(_loc2_)
         {
            _loc3_ = new this.SoundTransform(this.class_1.var_25);
            _loc2_.soundTransform = _loc3_;
         }
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         if(this.var_3)
         {
            this.var_3.gfx_UI.visible = false;
            this.method_182();
         }
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(!_loc2_)
         {
            return false;
         }
         if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_Level_12_3_Intro();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_UI.visible = true;
         this.SoundMixer.stopAll();
         this.var_3.start_Level();
      
}}},
"class_1082":{parent:"popup",fields:{"var_3":function(){return null;},"var_22":function(){return 1;},"var_21":function(){return null;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_Level_40_4_Intro", "victory_gym_song"],methods:{"class_1082":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         if(this.var_3)
         {
            this.var_3.gfx_UI.visible = false;
         }
         if(this.main.playerProfile.myAvatarGender)
         {
            this.var_21 = this.main.playerProfile.myAvatarGender;
            this.var_22 = this.main.playerProfile.myAvatarStyle;
         }
         this.method_317();
      
},"method_317":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.victory_gym_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"run":function(param1 = null){
         return false;
      
},"method_8":function(param1){
         var _loc2_ = this.var_21 + "_" + this.var_22;
         if(Boolean(this.gfx.yourAvatar) && this.gfx.yourAvatar.currentLabel != _loc2_)
         {
            this.gfx.yourAvatar.gotoAndStop(_loc2_);
         }
         else if(Boolean(this.gfx.yourAvatarWalk) && this.gfx.yourAvatarWalk.currentLabel != _loc2_)
         {
            this.gfx.yourAvatarWalk.gotoAndPlay(_loc2_);
         }
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         var _loc3_ = null;
         if(Boolean(param1.target) && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            _loc3_ = this.gfx.currentLabel;
            if(_loc2_.name == "butt_next")
            {
               this.gfx.actual.play();
               return true;
            }
            if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip" || _loc2_.name == "butt_end")
            {
               this.remove_Me();
               return true;
            }
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_Level_40_4_Intro();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_BG.visible = true;
         this.var_3.gfx_UI.visible = true;
         this.SoundMixer.stopAll();
         this.var_3.start_Level();
      
}}},
"class_1083":{parent:"popup",fields:{"var_49":function(){return null;},"var_3":function(){return null;},"var_22":function(){return 1;},"var_21":function(){return null;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_Level_40_Win", "victory_song"],methods:{"class_1083":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         this.var_3.hit_Play(true);
         this.var_3.hide_UI();
         this.method_182();
         if(this.main.playerProfile.myAvatarGender)
         {
            this.var_21 = this.main.playerProfile.myAvatarGender;
            this.var_22 = this.main.playerProfile.myAvatarStyle;
         }
         this.gfx.actual.addEventListener("frameConstructed",this.method_8);
      
},"method_8":function(param1){
         var _loc2_ = this.var_21 + "_" + this.var_22;
         if(Boolean(this.gfx.actual.yourAvatar) && this.gfx.actual.yourAvatar.currentLabel != _loc2_)
         {
            this.gfx.actual.yourAvatar.gotoAndStop(_loc2_);
         }
         else if(Boolean(this.gfx.actual.yourAvatarWalk) && this.gfx.actual.yourAvatarWalk.currentLabel != _loc2_)
         {
            this.gfx.actual.yourAvatarWalk.gotoAndPlay(_loc2_);
         }
      
},"method_182":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.victory_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(!_loc2_)
         {
            return false;
         }
         if(_loc2_.name == "butt_next")
         {
            this.gfx.actual.play();
            return true;
         }
         if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_Level_40_Win();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.end_Level();
      
}}},
"class_1084":{parent:"popup",fields:{"var_49":function(){return null;},"var_3":function(){return null;}},imports:["MovieClip", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_Level_12_3_2_Intro", "victory_gym_song"],methods:{"class_1084":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"method_182":function(){
         var _loc3_ = null;
         var _loc1_ = new this.victory_gym_song();
         var _loc2_ = _loc1_.play(0,10);
         if(_loc2_)
         {
            _loc3_ = new this.SoundTransform(this.class_1.var_25);
            _loc2_.soundTransform = _loc3_;
         }
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         if(this.var_3)
         {
            this.var_3.gfx_UI.visible = false;
            this.method_182();
         }
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(!_loc2_)
         {
            return false;
         }
         if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_Level_12_3_2_Intro();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_UI.visible = true;
         this.SoundMixer.stopAll();
         this.var_3.start_Level();
      
}}},
"class_1085":{parent:"popup",fields:{"var_3":function(){return null;},"var_22":function(){return 1;},"var_21":function(){return null;},"var_87":function(){return 0;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "ash_song", "class_1118", "class_956", "class_961", "movie_scene_intro_17_space_3", "mt_moon_song", "route10Music", "trainerEncounterSong"],methods:{"class_1085":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         if(this.var_3)
         {
            this.var_3.gfx_BG.visible = false;
            this.var_3.gfx_UI.visible = false;
         }
         this.gfx.butt_skip.visible = false;
         if(this.main.playerProfile.myAvatarGender)
         {
            this.var_21 = this.main.playerProfile.myAvatarGender;
            this.var_22 = this.main.playerProfile.myAvatarStyle;
         }
         this.gfx.addEventListener("frameConstructed",this.method_8);
      
},"method_187":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.trainerEncounterSong();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_127":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.mt_moon_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_205":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.ash_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_201":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.route10Music();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"run":function(param1 = null){
         if(this.gfx.currentLabel == "mtmoon" || this.gfx.currentLabel == "mtmoon2")
         {
            this.method_127();
         }
         else if(this.gfx.currentLabel == "trainer")
         {
            this.method_187();
         }
         else if(this.gfx.currentLabel == "zubat")
         {
            this.method_5("041");
         }
         else if(this.gfx.currentLabel == "route10")
         {
            this.method_201();
         }
         return false;
      
},"method_8":function(param1){
         var _loc2_ = this.var_21 + "_" + this.var_22;
         if(Boolean(this.gfx.yourAvatar) && this.gfx.yourAvatar.currentLabel != _loc2_)
         {
            this.gfx.yourAvatar.gotoAndStop(_loc2_);
         }
         else if(Boolean(this.gfx.yourAvatarWalk) && this.gfx.yourAvatarWalk.currentLabel != _loc2_)
         {
            this.gfx.yourAvatarWalk.gotoAndPlay(_loc2_);
         }
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         var _loc3_ = null;
         var _loc4_ = null;
         if(Boolean(param1.target) && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            if(_loc2_.name == "butt_next")
            {
               if(this.gfx.currentLabel == "startFight")
               {
                  this.remove_Me();
                  return true;
               }
               if(this.gfx.currentLabel == "goToFive")
               {
                  _loc3_ = this.var_3;
                  _loc4_ = new this.class_961(this.var_3.my_Parent,_loc3_.var_68);
                  this.send_Msg(["change_Screen",_loc4_]);
                  return true;
               }
               if(this.gfx.currentLabel == "goToFour")
               {
                  _loc3_ = this.var_3;
                  _loc4_ = new this.class_1118(this.var_3.my_Parent,_loc3_.var_68);
                  this.send_Msg(["change_Screen",_loc4_]);
                  return true;
               }
               if(this.gfx.currentLabel == "goToTwo")
               {
                  _loc3_ = this.var_3;
                  _loc4_ = new this.class_956(this.var_3.my_Parent,_loc3_.var_68);
                  this.send_Msg(["change_Screen",_loc4_]);
                  return true;
               }
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "btn_down")
            {
               this.gfx.gotoAndPlay("goDown");
               return true;
            }
            if(_loc2_.name == "btn_up")
            {
               this.gfx.gotoAndPlay("goUp");
               return true;
            }
            if(_loc2_.name == "btn_right")
            {
               this.gfx.gotoAndPlay("goRight");
               return true;
            }
            if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip")
            {
               this.remove_Me();
               return true;
            }
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_intro_17_space_3();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_BG.visible = true;
         this.var_3.gfx_UI.visible = true;
         this.var_3.start_Level();
      
}}},
"class_1086":{parent:"popup",fields:{"var_49":function(){return null;},"var_3":function(){return null;}},imports:["MovieClip", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_Level_12_4_Intro", "victory_gym_song"],methods:{"class_1086":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"method_182":function(){
         var _loc3_ = null;
         var _loc1_ = new this.victory_gym_song();
         var _loc2_ = _loc1_.play(0,10);
         if(_loc2_)
         {
            _loc3_ = new this.SoundTransform(this.class_1.var_25);
            _loc2_.soundTransform = _loc3_;
         }
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         if(this.var_3)
         {
            this.var_3.gfx_UI.visible = false;
            this.method_182();
         }
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(!_loc2_)
         {
            return false;
         }
         if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_Level_12_4_Intro();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_UI.visible = true;
         this.SoundMixer.stopAll();
         this.var_3.start_Level();
      
}}},
"class_1087":{parent:"popup",fields:{"var_49":function(){return null;},"var_3":function(){return null;}},imports:["MovieClip", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_Level_12_4_2_Intro", "victory_gym_song"],methods:{"class_1087":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"method_182":function(){
         var _loc3_ = null;
         var _loc1_ = new this.victory_gym_song();
         var _loc2_ = _loc1_.play(0,10);
         if(_loc2_)
         {
            _loc3_ = new this.SoundTransform(this.class_1.var_25);
            _loc2_.soundTransform = _loc3_;
         }
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         if(this.var_3)
         {
            this.var_3.gfx_UI.visible = false;
            this.method_182();
         }
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(!_loc2_)
         {
            return false;
         }
         if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_Level_12_4_2_Intro();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_UI.visible = true;
         this.SoundMixer.stopAll();
         this.var_3.start_Level();
      
}}},
"class_1088":{parent:"popup",fields:{"var_3":function(){return null;},"var_22":function(){return 1;},"var_21":function(){return null;},"var_87":function(){return 0;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform", "class_79", "class_80", "class_81", "class_82", "class_83", "wave"],constructors:["SoundTransform", "ash_song", "class_79", "class_80", "class_81", "class_82", "class_83", "class_956", "movie_scene_intro_17_space_5", "mt_moon_song", "route10Music", "team_rocket_music"],methods:{"class_1088":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         if(this.var_3)
         {
            this.var_3.gfx_BG.visible = false;
            this.var_3.gfx_UI.visible = false;
         }
         this.gfx.butt_skip.visible = false;
         if(this.main.playerProfile.myAvatarGender)
         {
            this.var_21 = this.main.playerProfile.myAvatarGender;
            this.var_22 = this.main.playerProfile.myAvatarStyle;
         }
         this.gfx.addEventListener("frameConstructed",this.method_8);
         this.method_127();
         var _loc1_ = Math.trunc(Math.random() * 100);
         if(_loc1_ <= 50)
         {
            this.var_87 = 41;
            this.gfx.gotoAndPlay("randomZubat");
         }
         else if(_loc1_ <= 76)
         {
            this.var_87 = 74;
            this.gfx.gotoAndPlay("randomGeodude");
         }
         else if(_loc1_ <= 84)
         {
            this.var_87 = 95;
            this.gfx.gotoAndPlay("randomOnix");
         }
         else if(_loc1_ <= 92)
         {
            this.var_87 = 100;
            this.gfx.gotoAndPlay("randomVoltorb");
         }
         else if(_loc1_ <= 100)
         {
            this.var_87 = 66;
            this.gfx.gotoAndPlay("randomMachop");
         }
      
},"method_263":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.team_rocket_music();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_127":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.mt_moon_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_205":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.ash_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_201":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.route10Music();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"run":function(param1 = null){
         if(this.gfx.currentLabel == "mtmoon" || this.gfx.currentLabel == "mtmoon2")
         {
            this.method_127();
         }
         else if(this.gfx.currentLabel == "zubat")
         {
            this.method_5("041");
         }
         else if(this.gfx.currentLabel == "route10")
         {
            this.method_201();
         }
         return false;
      
},"method_8":function(param1){
         var _loc2_ = this.var_21 + "_" + this.var_22;
         if(this.gfx.yourAvatar && this.gfx.yourAvatar.currentLabel != _loc2_)
         {
            this.gfx.yourAvatar.gotoAndStop(_loc2_);
         }
         else if(this.gfx.yourAvatarWalk && this.gfx.yourAvatarWalk.currentLabel != _loc2_)
         {
            this.gfx.yourAvatarWalk.gotoAndPlay(_loc2_);
         }
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         var _loc3_ = null;
         var _loc4_ = null;
         if(param1.target && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            if(_loc2_.name == "butt_next")
            {
               if(this.gfx.currentLabel == "goToTwo")
               {
                  _loc3_ = this.var_3;
                  _loc4_ = new this.class_956(this.var_3.my_Parent,_loc3_.var_68);
                  this.send_Msg(["change_Screen",_loc4_]);
                  return true;
               }
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "btn_left")
            {
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "btn_right")
            {
               this.gfx.gotoAndPlay("goRight");
               return true;
            }
            if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip")
            {
               this.remove_Me();
               return true;
            }
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_intro_17_space_5();
      
},"remove_Me":function(){
         var _loc1_ = null;
         this.__super.remove_Me();
         this.var_3.gfx_BG.visible = true;
         this.var_3.gfx_UI.visible = true;
         if(this.var_87 == 41)
         {
            _loc1_ = new this.class_82(this.var_3);
         }
         else if(this.var_87 == 74)
         {
            _loc1_ = new this.class_83(this.var_3);
         }
         else if(this.var_87 == 95)
         {
            _loc1_ = new this.class_80(this.var_3);
         }
         else if(this.var_87 == 100)
         {
            _loc1_ = new this.class_81(this.var_3);
         }
         else if(this.var_87 == 66)
         {
            _loc1_ = new this.class_79(this.var_3);
         }
         this.var_3.start_Level(true,false,_loc1_);
      
}}},
"class_1089":{parent:"popup",fields:{"var_3":function(){return null;},"var_22":function(){return 1;},"var_21":function(){return null;},"var_87":function(){return 0;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform", "class_79", "class_80", "class_81", "class_82", "class_83", "wave"],constructors:["SoundTransform", "ash_song", "class_79", "class_80", "class_81", "class_82", "class_83", "class_959", "class_963", "movie_scene_intro_17_space_5_beat", "mt_moon_song", "route10Music", "team_rocket_music"],methods:{"class_1089":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         if(this.var_3)
         {
            this.var_3.gfx_BG.visible = false;
            this.var_3.gfx_UI.visible = false;
         }
         this.gfx.butt_skip.visible = false;
         if(this.main.playerProfile.myAvatarGender)
         {
            this.var_21 = this.main.playerProfile.myAvatarGender;
            this.var_22 = this.main.playerProfile.myAvatarStyle;
         }
         this.gfx.addEventListener("frameConstructed",this.method_8);
      
},"method_263":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.team_rocket_music();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_127":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.mt_moon_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_205":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.ash_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_201":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.route10Music();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"run":function(param1 = null){
         if(this.gfx.currentLabel == "mtmoon" || this.gfx.currentLabel == "mtmoon2")
         {
            this.method_127();
         }
         else if(this.gfx.currentLabel == "zubat")
         {
            this.method_5("041");
         }
         else if(this.gfx.currentLabel == "route10")
         {
            this.method_201();
         }
         return false;
      
},"method_8":function(param1){
         var _loc2_ = this.var_21 + "_" + this.var_22;
         if(Boolean(this.gfx.yourAvatar) && this.gfx.yourAvatar.currentLabel != _loc2_)
         {
            this.gfx.yourAvatar.gotoAndStop(_loc2_);
         }
         else if(Boolean(this.gfx.yourAvatarWalk) && this.gfx.yourAvatarWalk.currentLabel != _loc2_)
         {
            this.gfx.yourAvatarWalk.gotoAndPlay(_loc2_);
         }
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         var _loc3_ = null;
         var _loc4_ = null;
         if(Boolean(param1.target) && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            if(_loc2_.name == "butt_next")
            {
               if(this.gfx.currentLabel == "goToThree")
               {
                  _loc3_ = this.var_3;
                  _loc4_ = new this.class_959(this.var_3.my_Parent,_loc3_.var_68);
                  this.send_Msg(["change_Screen",_loc4_]);
                  return true;
               }
               if(this.gfx.currentLabel == "goToSeven")
               {
                  _loc3_ = this.var_3;
                  _loc4_ = new this.class_963(this.var_3.my_Parent,_loc3_.var_68);
                  this.send_Msg(["change_Screen",_loc4_]);
                  return true;
               }
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "btn_left")
            {
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "btn_up")
            {
               this.gfx.gotoAndPlay("goUp");
               return true;
            }
            if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip")
            {
               this.remove_Me();
               return true;
            }
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_intro_17_space_5_beat();
      
},"remove_Me":function(){
         var _loc1_ = null;
         this.__super.remove_Me();
         this.var_3.gfx_BG.visible = true;
         this.var_3.gfx_UI.visible = true;
         if(this.var_87 == 41)
         {
            _loc1_ = new this.class_82(this.var_3);
         }
         else if(this.var_87 == 74)
         {
            _loc1_ = new this.class_83(this.var_3);
         }
         else if(this.var_87 == 95)
         {
            _loc1_ = new this.class_80(this.var_3);
         }
         else if(this.var_87 == 100)
         {
            _loc1_ = new this.class_81(this.var_3);
         }
         else if(this.var_87 == 66)
         {
            _loc1_ = new this.class_79(this.var_3);
         }
         this.var_3.start_Level(true,false,_loc1_);
      
}}},
"class_1090":{parent:"popup",fields:{"var_49":function(){return null;},"var_3":function(){return null;}},imports:["MovieClip", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_Level_12_5_Intro", "victory_gym_song"],methods:{"class_1090":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"method_182":function(){
         var _loc3_ = null;
         var _loc1_ = new this.victory_gym_song();
         var _loc2_ = _loc1_.play(0,10);
         if(_loc2_)
         {
            _loc3_ = new this.SoundTransform(this.class_1.var_25);
            _loc2_.soundTransform = _loc3_;
         }
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         if(this.var_3)
         {
            this.var_3.gfx_UI.visible = false;
            this.method_182();
         }
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(!_loc2_)
         {
            return false;
         }
         if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_Level_12_5_Intro();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_UI.visible = true;
         this.SoundMixer.stopAll();
         this.var_3.start_Level();
      
}}},
"class_1091":{parent:"popup",fields:{"var_3":function(){return null;},"var_22":function(){return 1;},"var_21":function(){return null;},"var_87":function(){return 0;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "ash_song", "class_959", "class_964", "movie_scene_intro_17_space_4", "mt_moon_song", "route10Music", "trainerEncounterSong"],methods:{"class_1091":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         if(this.var_3)
         {
            this.var_3.gfx_BG.visible = false;
            this.var_3.gfx_UI.visible = false;
         }
         this.gfx.butt_skip.visible = false;
         if(this.main.playerProfile.myAvatarGender)
         {
            this.var_21 = this.main.playerProfile.myAvatarGender;
            this.var_22 = this.main.playerProfile.myAvatarStyle;
         }
         this.gfx.addEventListener("frameConstructed",this.method_8);
         var _loc1_ = this.var_3;
         if(!_loc1_.var_68[2])
         {
            this.gfx.gotoAndPlay("notBeaten");
         }
      
},"method_187":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.trainerEncounterSong();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_127":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.mt_moon_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_205":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.ash_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_201":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.route10Music();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"run":function(param1 = null){
         if(this.gfx.currentLabel == "mtmoon" || this.gfx.currentLabel == "mtmoon2")
         {
            this.method_127();
         }
         else if(this.gfx.currentLabel == "trainer")
         {
            this.method_187();
         }
         else if(this.gfx.currentLabel == "zubat")
         {
            this.method_5("041");
         }
         else if(this.gfx.currentLabel == "route10")
         {
            this.method_201();
         }
         return false;
      
},"method_8":function(param1){
         var _loc2_ = this.var_21 + "_" + this.var_22;
         if(Boolean(this.gfx.yourAvatar) && this.gfx.yourAvatar.currentLabel != _loc2_)
         {
            this.gfx.yourAvatar.gotoAndStop(_loc2_);
         }
         else if(Boolean(this.gfx.yourAvatarWalk) && this.gfx.yourAvatarWalk.currentLabel != _loc2_)
         {
            this.gfx.yourAvatarWalk.gotoAndPlay(_loc2_);
         }
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         var _loc3_ = null;
         var _loc4_ = null;
         if(Boolean(param1.target) && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            if(_loc2_.name == "butt_next")
            {
               if(this.gfx.currentLabel == "startFight")
               {
                  this.remove_Me();
                  return true;
               }
               if(this.gfx.currentLabel == "goToSix")
               {
                  _loc3_ = this.var_3;
                  _loc4_ = new this.class_964(this.var_3.my_Parent,_loc3_.var_68);
                  this.send_Msg(["change_Screen",_loc4_]);
                  return true;
               }
               if(this.gfx.currentLabel == "goToThree")
               {
                  _loc3_ = this.var_3;
                  _loc4_ = new this.class_959(this.var_3.my_Parent,_loc3_.var_68);
                  this.send_Msg(["change_Screen",_loc4_]);
                  return true;
               }
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "btn_down")
            {
               this.gfx.gotoAndPlay("goDown");
               return true;
            }
            if(_loc2_.name == "btn_up")
            {
               this.gfx.gotoAndPlay("goUp");
               return true;
            }
            if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip")
            {
               this.remove_Me();
               return true;
            }
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_intro_17_space_4();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_BG.visible = true;
         this.var_3.gfx_UI.visible = true;
         this.var_3.start_Level();
      
}}},
"class_1092":{parent:"popup",fields:{"var_49":function(){return null;},"var_3":function(){return null;}},imports:["MovieClip", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_Level_12_5_2_Intro", "victory_gym_song"],methods:{"class_1092":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"method_182":function(){
         var _loc3_ = null;
         var _loc1_ = new this.victory_gym_song();
         var _loc2_ = _loc1_.play(0,10);
         if(_loc2_)
         {
            _loc3_ = new this.SoundTransform(this.class_1.var_25);
            _loc2_.soundTransform = _loc3_;
         }
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         if(this.var_3)
         {
            this.var_3.gfx_UI.visible = false;
            this.method_182();
         }
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(!_loc2_)
         {
            return false;
         }
         if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_Level_12_5_2_Intro();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_UI.visible = true;
         this.SoundMixer.stopAll();
         this.var_3.start_Level();
      
}}},
"class_1093":{parent:"popup",fields:{"var_3":function(){return null;},"var_22":function(){return 1;},"var_21":function(){return null;},"var_87":function(){return 0;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform", "class_85", "class_86", "class_87", "class_88", "class_89", "wave"],constructors:["SoundTransform", "ash_song", "class_85", "class_86", "class_87", "class_88", "class_89", "movie_scene_intro_17_space_7", "mt_moon_song", "route10Music", "team_rocket_music"],methods:{"class_1093":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         if(this.var_3)
         {
            this.var_3.gfx_BG.visible = false;
            this.var_3.gfx_UI.visible = false;
         }
         this.gfx.butt_skip.visible = false;
         if(this.main.playerProfile.myAvatarGender)
         {
            this.var_21 = this.main.playerProfile.myAvatarGender;
            this.var_22 = this.main.playerProfile.myAvatarStyle;
         }
         this.gfx.addEventListener("frameConstructed",this.method_8);
         this.method_127();
         var _loc1_ = Math.trunc(Math.random() * 100);
         if(_loc1_ <= 50)
         {
            this.var_87 = 41;
            this.gfx.gotoAndPlay("randomZubat");
         }
         else if(_loc1_ <= 76)
         {
            this.var_87 = 74;
            this.gfx.gotoAndPlay("randomGeodude");
         }
         else if(_loc1_ <= 84)
         {
            this.var_87 = 95;
            this.gfx.gotoAndPlay("randomOnix");
         }
         else if(_loc1_ <= 92)
         {
            this.var_87 = 100;
            this.gfx.gotoAndPlay("randomVoltorb");
         }
         else if(_loc1_ <= 100)
         {
            this.var_87 = 66;
            this.gfx.gotoAndPlay("randomMachop");
         }
      
},"method_263":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.team_rocket_music();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_127":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.mt_moon_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_205":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.ash_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_201":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.route10Music();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"run":function(param1 = null){
         if(this.gfx.currentLabel == "mtmoon" || this.gfx.currentLabel == "mtmoon2")
         {
            this.method_127();
         }
         else if(this.gfx.currentLabel == "zubat")
         {
            this.method_5("041");
         }
         else if(this.gfx.currentLabel == "route10")
         {
            this.method_201();
         }
         return false;
      
},"method_8":function(param1){
         var _loc2_ = this.var_21 + "_" + this.var_22;
         if(Boolean(this.gfx.yourAvatar) && this.gfx.yourAvatar.currentLabel != _loc2_)
         {
            this.gfx.yourAvatar.gotoAndStop(_loc2_);
         }
         else if(Boolean(this.gfx.yourAvatarWalk) && this.gfx.yourAvatarWalk.currentLabel != _loc2_)
         {
            this.gfx.yourAvatarWalk.gotoAndPlay(_loc2_);
         }
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         if(Boolean(param1.target) && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            if(_loc2_.name == "butt_next")
            {
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "btn_left")
            {
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "btn_right")
            {
               this.gfx.gotoAndPlay("goRight");
               return true;
            }
            if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip")
            {
               this.remove_Me();
               return true;
            }
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_intro_17_space_7();
      
},"remove_Me":function(){
         var _loc1_ = null;
         this.__super.remove_Me();
         this.var_3.gfx_BG.visible = true;
         this.var_3.gfx_UI.visible = true;
         if(this.var_87 == 41)
         {
            _loc1_ = new this.class_86(this.var_3);
         }
         else if(this.var_87 == 74)
         {
            _loc1_ = new this.class_89(this.var_3);
         }
         else if(this.var_87 == 95)
         {
            _loc1_ = new this.class_85(this.var_3);
         }
         else if(this.var_87 == 100)
         {
            _loc1_ = new this.class_88(this.var_3);
         }
         else if(this.var_87 == 66)
         {
            _loc1_ = new this.class_87(this.var_3);
         }
         this.var_3.start_Level(true,false,_loc1_);
      
}}},
"class_1094":{parent:"popup",fields:{"var_3":function(){return null;},"var_22":function(){return 1;},"var_21":function(){return null;},"var_87":function(){return 0;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform", "class_79", "class_80", "class_81", "class_82", "class_83", "wave"],constructors:["SoundTransform", "ash_song", "class_1121", "class_79", "class_80", "class_81", "class_82", "class_83", "class_961", "class_964", "movie_scene_intro_17_space_7_beat", "mt_moon_song", "route10Music", "team_rocket_music"],methods:{"class_1094":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         if(this.var_3)
         {
            this.var_3.gfx_BG.visible = false;
            this.var_3.gfx_UI.visible = false;
         }
         this.gfx.butt_skip.visible = false;
         if(this.main.playerProfile.myAvatarGender)
         {
            this.var_21 = this.main.playerProfile.myAvatarGender;
            this.var_22 = this.main.playerProfile.myAvatarStyle;
         }
         this.gfx.addEventListener("frameConstructed",this.method_8);
      
},"method_263":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.team_rocket_music();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_127":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.mt_moon_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_205":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.ash_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_201":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.route10Music();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"run":function(param1 = null){
         if(this.gfx.currentLabel == "mtmoon" || this.gfx.currentLabel == "mtmoon2")
         {
            this.method_127();
         }
         else if(this.gfx.currentLabel == "zubat")
         {
            this.method_5("041");
         }
         else if(this.gfx.currentLabel == "route10")
         {
            this.method_201();
         }
         return false;
      
},"method_8":function(param1){
         var _loc2_ = this.var_21 + "_" + this.var_22;
         if(this.gfx.yourAvatar && this.gfx.yourAvatar.currentLabel != _loc2_)
         {
            this.gfx.yourAvatar.gotoAndStop(_loc2_);
         }
         else if(this.gfx.yourAvatarWalk && this.gfx.yourAvatarWalk.currentLabel != _loc2_)
         {
            this.gfx.yourAvatarWalk.gotoAndPlay(_loc2_);
         }
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         var _loc3_ = null;
         var _loc4_ = null;
         if(param1.target && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            if(_loc2_.name == "butt_next")
            {
               if(this.gfx.currentLabel == "goToSix")
               {
                  _loc3_ = this.var_3;
                  _loc4_ = new this.class_964(this.var_3.my_Parent,_loc3_.var_68);
                  this.send_Msg(["change_Screen",_loc4_]);
                  return true;
               }
               if(this.gfx.currentLabel == "goToFive")
               {
                  _loc3_ = this.var_3;
                  _loc4_ = new this.class_961(this.var_3.my_Parent,_loc3_.var_68);
                  this.send_Msg(["change_Screen",_loc4_]);
                  return true;
               }
               if(this.gfx.currentLabel == "goToEight")
               {
                  _loc3_ = this.var_3;
                  _loc4_ = new this.class_1121(this.var_3.my_Parent,_loc3_.var_68);
                  this.send_Msg(["change_Screen",_loc4_]);
                  return true;
               }
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "btn_left")
            {
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "btn_up")
            {
               this.gfx.gotoAndPlay("goUp");
               return true;
            }
            if(_loc2_.name == "btn_down")
            {
               this.gfx.gotoAndPlay("goDown");
               return true;
            }
            if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip")
            {
               this.remove_Me();
               return true;
            }
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_intro_17_space_7_beat();
      
},"remove_Me":function(){
         var _loc1_ = null;
         this.__super.remove_Me();
         this.var_3.gfx_BG.visible = true;
         this.var_3.gfx_UI.visible = true;
         if(this.var_87 == 41)
         {
            _loc1_ = new this.class_82(this.var_3);
         }
         else if(this.var_87 == 74)
         {
            _loc1_ = new this.class_83(this.var_3);
         }
         else if(this.var_87 == 95)
         {
            _loc1_ = new this.class_80(this.var_3);
         }
         else if(this.var_87 == 100)
         {
            _loc1_ = new this.class_81(this.var_3);
         }
         else if(this.var_87 == 66)
         {
            _loc1_ = new this.class_79(this.var_3);
         }
         this.var_3.start_Level(true,false,_loc1_);
      
}}},
"class_1095":{parent:"popup",fields:{"var_3":function(){return null;},"var_22":function(){return 1;},"var_21":function(){return null;},"var_87":function(){return 0;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "ash_song", "class_1118", "class_963", "class_966", "class_967", "movie_scene_intro_17_space_6", "mt_moon_song", "route10Music", "trainerEncounterSong"],methods:{"class_1095":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         if(this.var_3)
         {
            this.var_3.gfx_BG.visible = false;
            this.var_3.gfx_UI.visible = false;
         }
         this.gfx.butt_skip.visible = false;
         if(this.main.playerProfile.myAvatarGender)
         {
            this.var_21 = this.main.playerProfile.myAvatarGender;
            this.var_22 = this.main.playerProfile.myAvatarStyle;
         }
         this.gfx.addEventListener("frameConstructed",this.method_8);
      
},"method_187":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.trainerEncounterSong();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_127":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.mt_moon_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_205":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.ash_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_201":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.route10Music();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"run":function(param1 = null){
         if(this.gfx.currentLabel == "mtmoon" || this.gfx.currentLabel == "mtmoon2")
         {
            this.method_127();
         }
         else if(this.gfx.currentLabel == "trainer")
         {
            this.method_187();
         }
         else if(this.gfx.currentLabel == "zubat")
         {
            this.method_5("041");
         }
         else if(this.gfx.currentLabel == "route10")
         {
            this.method_201();
         }
         return false;
      
},"method_8":function(param1){
         var _loc2_ = this.var_21 + "_" + this.var_22;
         if(this.gfx.yourAvatar && this.gfx.yourAvatar.currentLabel != _loc2_)
         {
            this.gfx.yourAvatar.gotoAndStop(_loc2_);
         }
         else if(this.gfx.yourAvatarWalk && this.gfx.yourAvatarWalk.currentLabel != _loc2_)
         {
            this.gfx.yourAvatarWalk.gotoAndPlay(_loc2_);
         }
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         var _loc3_ = null;
         var _loc4_ = null;
         if(param1.target && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            if(_loc2_.name == "butt_next")
            {
               if(this.gfx.currentLabel == "startFight")
               {
                  this.remove_Me();
                  return true;
               }
               if(this.gfx.currentLabel == "goToSeven")
               {
                  _loc3_ = this.var_3;
                  _loc4_ = new this.class_963(this.var_3.my_Parent,_loc3_.var_68);
                  this.send_Msg(["change_Screen",_loc4_]);
                  return true;
               }
               if(this.gfx.currentLabel == "goToExit")
               {
                  _loc3_ = this.var_3;
                  _loc4_ = new this.class_967(this.var_3.my_Parent,_loc3_.var_68);
                  this.send_Msg(["change_Screen",_loc4_]);
                  return true;
               }
               if(this.gfx.currentLabel == "goToFour")
               {
                  _loc3_ = this.var_3;
                  _loc4_ = new this.class_1118(this.var_3.my_Parent,_loc3_.var_68);
                  this.send_Msg(["change_Screen",_loc4_]);
                  return true;
               }
               if(this.gfx.currentLabel == "goToTen")
               {
                  _loc3_ = this.var_3;
                  _loc4_ = new this.class_966(this.var_3.my_Parent,_loc3_.var_68);
                  this.send_Msg(["change_Screen",_loc4_]);
                  return true;
               }
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "btn_down")
            {
               this.gfx.gotoAndPlay("goDown");
               return true;
            }
            if(_loc2_.name == "btn_up")
            {
               this.gfx.gotoAndPlay("goUp");
               return true;
            }
            if(_loc2_.name == "btn_right")
            {
               this.gfx.gotoAndPlay("goRight");
               return true;
            }
            if(_loc2_.name == "btn_left")
            {
               this.gfx.gotoAndPlay("goLeft");
               return true;
            }
            if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip")
            {
               this.remove_Me();
               return true;
            }
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_intro_17_space_6();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_BG.visible = true;
         this.var_3.gfx_UI.visible = true;
         this.var_3.start_Level();
      
}}},
"class_1096":{parent:"popup",fields:{"var_49":function(){return null;},"var_3":function(){return null;}},imports:["MovieClip", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_Level_12_6_Intro", "victory_gym_song"],methods:{"class_1096":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"method_182":function(){
         var _loc3_ = null;
         var _loc1_ = new this.victory_gym_song();
         var _loc2_ = _loc1_.play(0,10);
         if(_loc2_)
         {
            _loc3_ = new this.SoundTransform(this.class_1.var_25);
            _loc2_.soundTransform = _loc3_;
         }
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         if(this.var_3)
         {
            this.var_3.gfx_UI.visible = false;
            this.method_182();
         }
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(!_loc2_)
         {
            return false;
         }
         if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_Level_12_6_Intro();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_UI.visible = true;
         this.SoundMixer.stopAll();
         this.var_3.start_Level();
      
}}},
"class_1097":{parent:"popup",fields:{"var_49":function(){return null;},"var_3":function(){return null;}},imports:["MovieClip", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_Level_12_Win", "victory_song"],methods:{"class_1097":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         this.var_3.hit_Play(true);
         this.var_3.hide_UI();
         this.method_182();
      
},"method_182":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.victory_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(!_loc2_)
         {
            return false;
         }
         if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_Level_12_Win();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.end_Level();
      
}}},
"class_1098":{parent:"popup",fields:{"var_49":function(){return null;},"var_3":function(){return null;}},imports:["MovieClip", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_Level_12_6_2_Intro", "victory_gym_song"],methods:{"class_1098":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"method_182":function(){
         var _loc3_ = null;
         var _loc1_ = new this.victory_gym_song();
         var _loc2_ = _loc1_.play(0,10);
         if(_loc2_)
         {
            _loc3_ = new this.SoundTransform(this.class_1.var_25);
            _loc2_.soundTransform = _loc3_;
         }
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         if(this.var_3)
         {
            this.var_3.gfx_UI.visible = false;
            this.method_182();
         }
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(!_loc2_)
         {
            return false;
         }
         if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_Level_12_6_2_Intro();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_UI.visible = true;
         this.SoundMixer.stopAll();
         this.var_3.start_Level();
      
}}},
"class_1099":{parent:"popup",fields:{"var_3":function(){return null;},"var_22":function(){return 1;},"var_21":function(){return null;},"var_87":function(){return 0;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "ash_song", "class_964", "class_968", "movie_scene_intro_17_space_10", "mt_moon_song", "route10Music", "trainerEncounterSong"],methods:{"class_1099":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         if(this.var_3)
         {
            this.var_3.gfx_BG.visible = false;
            this.var_3.gfx_UI.visible = false;
         }
         this.gfx.butt_skip.visible = false;
         if(this.main.playerProfile.myAvatarGender)
         {
            this.var_21 = this.main.playerProfile.myAvatarGender;
            this.var_22 = this.main.playerProfile.myAvatarStyle;
         }
         this.gfx.addEventListener("frameConstructed",this.method_8);
         var _loc1_ = this.var_3;
         if(!_loc1_.var_68[3])
         {
            this.gfx.gotoAndPlay("notBeaten");
         }
      
},"method_187":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.trainerEncounterSong();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_127":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.mt_moon_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_205":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.ash_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_201":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.route10Music();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"run":function(param1 = null){
         if(this.gfx.currentLabel == "mtmoon" || this.gfx.currentLabel == "mtmoon2")
         {
            this.method_127();
         }
         else if(this.gfx.currentLabel == "trainer")
         {
            this.method_187();
         }
         else if(this.gfx.currentLabel == "zubat")
         {
            this.method_5("041");
         }
         else if(this.gfx.currentLabel == "route10")
         {
            this.method_201();
         }
         return false;
      
},"method_8":function(param1){
         var _loc2_ = this.var_21 + "_" + this.var_22;
         if(Boolean(this.gfx.yourAvatar) && this.gfx.yourAvatar.currentLabel != _loc2_)
         {
            this.gfx.yourAvatar.gotoAndStop(_loc2_);
         }
         else if(Boolean(this.gfx.yourAvatarWalk) && this.gfx.yourAvatarWalk.currentLabel != _loc2_)
         {
            this.gfx.yourAvatarWalk.gotoAndPlay(_loc2_);
         }
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         var _loc3_ = null;
         var _loc4_ = null;
         if(Boolean(param1.target) && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            if(_loc2_.name == "butt_next")
            {
               if(this.gfx.currentLabel == "startFight")
               {
                  this.remove_Me();
                  return true;
               }
               if(this.gfx.currentLabel == "goToSix")
               {
                  _loc3_ = this.var_3;
                  _loc4_ = new this.class_964(this.var_3.my_Parent,_loc3_.var_68);
                  this.send_Msg(["change_Screen",_loc4_]);
                  return true;
               }
               if(this.gfx.currentLabel == "goToNine")
               {
                  _loc3_ = this.var_3;
                  _loc4_ = new this.class_968(this.var_3.my_Parent,_loc3_.var_68);
                  this.send_Msg(["change_Screen",_loc4_]);
                  return true;
               }
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "btn_right")
            {
               this.gfx.gotoAndPlay("goRight");
               return true;
            }
            if(_loc2_.name == "btn_down")
            {
               this.gfx.gotoAndPlay("goDown");
               return true;
            }
            if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip")
            {
               this.remove_Me();
               return true;
            }
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_intro_17_space_10();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_BG.visible = true;
         this.var_3.gfx_UI.visible = true;
         this.var_3.start_Level();
      
}}},
"class_1100":{parent:"popup",fields:{"var_3":function(){return null;},"var_22":function(){return 1;},"var_21":function(){return null;},"var_87":function(){return 0;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "ash_song", "movie_scene_intro_17_exit", "mt_moon_song", "route10Music", "trainerEncounterSong"],methods:{"class_1100":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         if(this.var_3)
         {
            this.var_3.gfx_BG.visible = false;
            this.var_3.gfx_UI.visible = false;
         }
         this.gfx.butt_skip.visible = false;
         if(this.main.playerProfile.myAvatarGender)
         {
            this.var_21 = this.main.playerProfile.myAvatarGender;
            this.var_22 = this.main.playerProfile.myAvatarStyle;
         }
      
},"method_187":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.trainerEncounterSong();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_127":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.mt_moon_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_205":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.ash_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_201":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.route10Music();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"run":function(param1 = null){
         if(this.gfx.currentLabel == "mtmoon" || this.gfx.currentLabel == "mtmoon2")
         {
            this.method_127();
         }
         else if(this.gfx.currentLabel == "trainer")
         {
            this.method_187();
         }
         else if(this.gfx.currentLabel == "zubat")
         {
            this.method_5("041");
         }
         else if(this.gfx.currentLabel == "route10")
         {
            this.method_201();
         }
         var _loc2_ = this.var_21 + "_" + this.var_22;
         if(Boolean(this.gfx.yourAvatar) && this.gfx.yourAvatar.currentLabel != _loc2_)
         {
            this.gfx.yourAvatar.gotoAndStop(_loc2_);
         }
         else if(Boolean(this.gfx.yourAvatarWalk) && this.gfx.yourAvatarWalk.currentLabel != _loc2_)
         {
            this.gfx.yourAvatarWalk.gotoAndPlay(_loc2_);
         }
         return false;
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         if(Boolean(param1.target) && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            if(_loc2_.name == "butt_next")
            {
               this.var_3.i_Win();
               this.var_3.end_Level();
               return true;
            }
            if(_loc2_.name == "btn_down")
            {
               this.gfx.gotoAndPlay("goDown");
               return true;
            }
            if(_loc2_.name == "btn_up")
            {
               this.gfx.gotoAndPlay("goUp");
               return true;
            }
            if(_loc2_.name == "btn_right")
            {
               this.gfx.gotoAndPlay("goRight");
               return true;
            }
            if(_loc2_.name == "btn_left")
            {
               this.gfx.gotoAndPlay("goLeft");
               return true;
            }
            if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip")
            {
               this.remove_Me();
               return true;
            }
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_intro_17_exit();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_BG.visible = true;
         this.var_3.gfx_UI.visible = true;
         this.var_3.start_Level();
      
}}},
"class_1101":{parent:"popup",fields:{"var_3":function(){return null;},"var_22":function(){return 1;},"var_21":function(){return null;},"var_87":function(){return 0;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "ash_song", "class_963", "class_968", "movie_scene_intro_17_space_8", "mt_moon_song", "route10Music", "trainerEncounterSong"],methods:{"class_1101":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         if(this.var_3)
         {
            this.var_3.gfx_BG.visible = false;
            this.var_3.gfx_UI.visible = false;
         }
         this.gfx.butt_skip.visible = false;
         if(this.main.playerProfile.myAvatarGender)
         {
            this.var_21 = this.main.playerProfile.myAvatarGender;
            this.var_22 = this.main.playerProfile.myAvatarStyle;
         }
         this.gfx.addEventListener("frameConstructed",this.method_8);
         var _loc1_ = this.var_3;
         if(!_loc1_.var_68[4])
         {
            this.gfx.gotoAndPlay("notBeaten");
         }
      
},"method_187":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.trainerEncounterSong();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_127":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.mt_moon_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_205":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.ash_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_201":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.route10Music();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"run":function(param1 = null){
         if(this.gfx.currentLabel == "mtmoon" || this.gfx.currentLabel == "mtmoon2")
         {
            this.method_127();
         }
         else if(this.gfx.currentLabel == "trainer")
         {
            this.method_187();
         }
         else if(this.gfx.currentLabel == "zubat")
         {
            this.method_5("041");
         }
         else if(this.gfx.currentLabel == "route10")
         {
            this.method_201();
         }
         return false;
      
},"method_8":function(param1){
         var _loc2_ = this.var_21 + "_" + this.var_22;
         if(Boolean(this.gfx.yourAvatar) && this.gfx.yourAvatar.currentLabel != _loc2_)
         {
            this.gfx.yourAvatar.gotoAndStop(_loc2_);
         }
         else if(Boolean(this.gfx.yourAvatarWalk) && this.gfx.yourAvatarWalk.currentLabel != _loc2_)
         {
            this.gfx.yourAvatarWalk.gotoAndPlay(_loc2_);
         }
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         var _loc3_ = null;
         var _loc4_ = null;
         if(Boolean(param1.target) && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            if(_loc2_.name == "butt_next")
            {
               if(this.gfx.currentLabel == "startFight")
               {
                  this.remove_Me();
                  return true;
               }
               if(this.gfx.currentLabel == "goToSeven")
               {
                  _loc3_ = this.var_3;
                  _loc4_ = new this.class_963(this.var_3.my_Parent,_loc3_.var_68);
                  this.send_Msg(["change_Screen",_loc4_]);
                  return true;
               }
               if(this.gfx.currentLabel == "goToNine")
               {
                  _loc3_ = this.var_3;
                  _loc4_ = new this.class_968(this.var_3.my_Parent,_loc3_.var_68);
                  this.send_Msg(["change_Screen",_loc4_]);
                  return true;
               }
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "btn_left")
            {
               this.gfx.gotoAndPlay("goLeft");
               return true;
            }
            if(_loc2_.name == "btn_down")
            {
               this.gfx.gotoAndPlay("goDown");
               return true;
            }
            if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip")
            {
               this.remove_Me();
               return true;
            }
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_intro_17_space_8();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_BG.visible = true;
         this.var_3.gfx_UI.visible = true;
         this.var_3.start_Level();
      
}}},
"class_1102":{parent:"popup",fields:{"var_3":function(){return null;},"var_22":function(){return 1;},"var_21":function(){return null;},"var_87":function(){return 0;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform", "class_79", "class_80", "class_81", "class_82", "class_83", "wave"],constructors:["SoundTransform", "ash_song", "class_79", "class_80", "class_81", "class_82", "class_83", "class_968", "movie_scene_intro_17_space_9_beat", "mt_moon_song", "route10Music", "team_rocket_music"],methods:{"class_1102":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         if(this.var_3)
         {
            this.var_3.gfx_BG.visible = false;
            this.var_3.gfx_UI.visible = false;
         }
         this.gfx.butt_skip.visible = false;
         if(this.main.playerProfile.myAvatarGender)
         {
            this.var_21 = this.main.playerProfile.myAvatarGender;
            this.var_22 = this.main.playerProfile.myAvatarStyle;
         }
         this.gfx.addEventListener("frameConstructed",this.method_8);
      
},"method_263":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.team_rocket_music();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_127":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.mt_moon_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_205":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.ash_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_201":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.route10Music();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"run":function(param1 = null){
         if(this.gfx.currentLabel == "mtmoon" || this.gfx.currentLabel == "mtmoon2")
         {
            this.method_127();
         }
         else if(this.gfx.currentLabel == "zubat")
         {
            this.method_5("041");
         }
         else if(this.gfx.currentLabel == "route10")
         {
            this.method_201();
         }
         return false;
      
},"method_8":function(param1){
         var _loc2_ = this.var_21 + "_" + this.var_22;
         if(Boolean(this.gfx.yourAvatar) && this.gfx.yourAvatar.currentLabel != _loc2_)
         {
            this.gfx.yourAvatar.gotoAndStop(_loc2_);
         }
         else if(Boolean(this.gfx.yourAvatarWalk) && this.gfx.yourAvatarWalk.currentLabel != _loc2_)
         {
            this.gfx.yourAvatarWalk.gotoAndPlay(_loc2_);
         }
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         var _loc3_ = null;
         var _loc4_ = null;
         if(Boolean(param1.target) && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            if(_loc2_.name == "butt_next")
            {
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "btn_end")
            {
               _loc3_ = this.var_3;
               _loc4_ = new this.class_968(this.var_3.my_Parent,_loc3_.var_68);
               this.send_Msg(["change_Screen",_loc4_]);
               return true;
            }
            if(_loc2_.name == "btn_up")
            {
               this.gfx.gotoAndPlay("goUp");
               return true;
            }
            if(_loc2_.name == "btn_down")
            {
               this.gfx.gotoAndPlay("goDown");
               return true;
            }
            if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip")
            {
               this.remove_Me();
               return true;
            }
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_intro_17_space_9_beat();
      
},"remove_Me":function(){
         var _loc1_ = null;
         this.__super.remove_Me();
         this.var_3.gfx_BG.visible = true;
         this.var_3.gfx_UI.visible = true;
         if(this.var_87 == 41)
         {
            _loc1_ = new this.class_82(this.var_3);
         }
         else if(this.var_87 == 74)
         {
            _loc1_ = new this.class_83(this.var_3);
         }
         else if(this.var_87 == 95)
         {
            _loc1_ = new this.class_80(this.var_3);
         }
         else if(this.var_87 == 100)
         {
            _loc1_ = new this.class_81(this.var_3);
         }
         else if(this.var_87 == 66)
         {
            _loc1_ = new this.class_79(this.var_3);
         }
         this.var_3.start_Level(true,false,_loc1_);
      
}}},
"class_1103":{parent:"popup",fields:{"var_3":function(){return null;},"var_22":function(){return 1;},"var_21":function(){return null;},"var_87":function(){return 0;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "ash_song", "class_1121", "class_966", "movie_scene_intro_17_space_9", "mt_moon_song", "route10Music", "trainerEncounterSong"],methods:{"class_1103":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         if(this.var_3)
         {
            this.var_3.gfx_BG.visible = false;
            this.var_3.gfx_UI.visible = false;
         }
         this.gfx.butt_skip.visible = false;
         if(this.main.playerProfile.myAvatarGender)
         {
            this.var_21 = this.main.playerProfile.myAvatarGender;
            this.var_22 = this.main.playerProfile.myAvatarStyle;
         }
         this.gfx.addEventListener("frameConstructed",this.method_8);
         var _loc1_ = this.var_3;
         var _loc2_ = Math.trunc(0);
         while(_loc2_ < 7)
         {
            if(_loc1_.var_68[_loc2_] == false)
            {
               this.gfx.bg.gotoAndStop(2);
               return;
            }
            _loc2_++;
         }
         if(!_loc1_.var_68[7])
         {
            this.gfx.gotoAndPlay("notBeaten");
         }
      
},"method_187":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.trainerEncounterSong();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_127":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.mt_moon_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_205":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.ash_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_201":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.route10Music();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"run":function(param1 = null){
         if(this.gfx.currentLabel == "mtmoon" || this.gfx.currentLabel == "mtmoon2")
         {
            this.method_127();
         }
         else if(this.gfx.currentLabel == "trainer")
         {
            this.method_187();
         }
         else if(this.gfx.currentLabel == "zubat")
         {
            this.method_5("041");
         }
         else if(this.gfx.currentLabel == "route10")
         {
            this.method_201();
         }
         return false;
      
},"method_8":function(param1){
         var _loc2_ = this.var_21 + "_" + this.var_22;
         if(Boolean(this.gfx.yourAvatar) && this.gfx.yourAvatar.currentLabel != _loc2_)
         {
            this.gfx.yourAvatar.gotoAndStop(_loc2_);
         }
         else if(Boolean(this.gfx.yourAvatarWalk) && this.gfx.yourAvatarWalk.currentLabel != _loc2_)
         {
            this.gfx.yourAvatarWalk.gotoAndPlay(_loc2_);
         }
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         var _loc3_ = null;
         var _loc4_ = null;
         if(Boolean(param1.target) && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            if(_loc2_.name == "butt_next")
            {
               if(this.gfx.currentLabel == "startFight")
               {
                  this.remove_Me();
                  return true;
               }
               if(this.gfx.currentLabel == "goToTen")
               {
                  _loc3_ = this.var_3;
                  _loc4_ = new this.class_966(this.var_3.my_Parent,_loc3_.var_68);
                  this.send_Msg(["change_Screen",_loc4_]);
                  return true;
               }
               if(this.gfx.currentLabel == "goToEight")
               {
                  _loc3_ = this.var_3;
                  _loc4_ = new this.class_1121(this.var_3.my_Parent,_loc3_.var_68);
                  this.send_Msg(["change_Screen",_loc4_]);
                  return true;
               }
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "btn_right")
            {
               this.gfx.gotoAndPlay("goRight");
               return true;
            }
            if(_loc2_.name == "btn_left")
            {
               this.gfx.gotoAndPlay("goLeft");
               return true;
            }
            if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip")
            {
               this.remove_Me();
               return true;
            }
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_intro_17_space_9();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_BG.visible = true;
         this.var_3.gfx_UI.visible = true;
         this.var_3.start_Level();
      
}}},
"class_969":{parent:"popup",fields:{"loader":function(){return null;},"levelScreen":function(){return null;},"achType":function(){return 0;},"achPos":function(){return 0;},"otherData":function(){return 0;},"nextPopup":function(){return null;}},imports:["MovieClip", "Event", "IOErrorEvent", "MouseEvent", "URLLoader", "URLRequest", "URLVariables"],constructors:["Date", "URLLoader", "URLRequest", "URLVariables", "popup_Achievement"],methods:{"class_969":function(param1, param2, param3, param4 = 0){
         this.levelScreen = param1;
         this.achType = param2;
         this.achPos = param3;
         this.otherData = param4;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.levelScreen.hit_Play(true);
         this.levelScreen.hide_UI();
         this.levelScreen.pause_Level_Music();
         this.sendAchievementRequest();
      
},"sendAchievementRequest":function(){
         this.gfx.actual.gotoAndStop("achievement");
         var _loc1_ = new this.URLRequest("http://ptd.lol/swf1/achieve.php?Date=" + new this.Date().getTime());
         var _loc2_ = new this.URLVariables();
         _loc2_.Action = "updateAccount";
         _loc2_.Email = this.main.playerProfile.email;
         _loc2_.Pass = this.main.playerProfile.pass;
         _loc2_.type = this.achType;
         _loc2_.pos = this.achPos;
         _loc2_.other = this.otherData;
         _loc1_.method = "POST";
         _loc1_.data = _loc2_;
         this.loader = new this.URLLoader();
         this.loader.dataFormat = "variables";
         this.loader.addEventListener("complete",this.onLoadComplete);
         this.loader.addEventListener("ioError",this.onIOError);
         this.loader.load(_loc1_);
      
},"cleanupLoader":function(){
         if(this.loader)
         {
            this.loader.removeEventListener("complete",this.onLoadComplete);
            this.loader.removeEventListener("ioError",this.onIOError);
            this.loader = null;
         }
      
},"onIOError":function(param1){
         this.cleanupLoader();
         this.gfx.actual.gotoAndStop("notSaveAchievement");
      
},"onLoadComplete":function(param1){
         var _loc2_ = param1.target.data;
         this.cleanupLoader();
         if(_loc2_ && _loc2_.Result == "Success")
         {
            this.gfx.actual.gotoAndStop("saved");
         }
         else if(_loc2_ && _loc2_.Result == "Failure")
         {
            this.gfx.actual.gotoAndStop("notSaveAchievement");
         }
      
},"closePopupAndResumeGame":function(){
         this.levelScreen.resume_Level_Music();
         this.levelScreen.show_UI();
         this.levelScreen.hit_Play();
         this.remove_Me();
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = Math.trunc(0);
         if(this.gfx.actual.currentLabel == "saved")
         {
            _loc2_ = Math.trunc(0);
            if(this.achType == 1)
            {
               _loc2_ = Math.trunc(100 + this.achPos);
            }
            else
            {
               _loc2_ = Math.trunc(this.achType);
            }
            this.main.playerProfile.addAchievement(_loc2_);
            if(this.otherData != 0)
            {
               this.main.playerProfile.addAchievement(this.otherData);
            }
            this.closePopupAndResumeGame();
            return true;
         }
         if(!param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc3_ = param1.target;
         if(!_loc3_)
         {
            return false;
         }
         if(this.gfx.actual.yes_butt && this.gfx.actual.yes_butt.contains(_loc3_))
         {
            this.sendAchievementRequest();
            return true;
         }
         if(this.gfx.actual.no_butt && this.gfx.actual.no_butt.contains(_loc3_))
         {
            this.closePopupAndResumeGame();
            return true;
         }
         return false;
      
},"get_Graphic":function(){
         return new this.popup_Achievement();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         if(this.nextPopup)
         {
            this.levelScreen.add_Popup(this.nextPopup);
         }
      
}}},
"class_970":{parent:"popup",fields:{"var_111":function(){return null;},"var_362":function(){return null;},"var_215":function(){return 0;},"var_3":function(){return null;}},imports:["DisplayObject", "MovieClip", "MouseEvent"],constructors:["focus_Trying_New_Move"],methods:{"class_970":function(param1, param2, param3, param4){
         this.var_111 = param2;
         this.var_362 = param3;
         this.var_215 = param4;
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         var _loc1_ = "";
         if(this.var_111.myProfile.shiny == 2)
         {
            _loc1_ = "ss";
         }
         else if(this.var_111.myProfile.shiny == 1)
         {
            _loc1_ = "s";
         }
         this.gfx.actual.gfx_poke.gotoAndStop(_loc1_ + this.var_111.myProfile.num);
         this.gfx.actual.moveText.text = this.var_111.myProfile.name + " is trying to learn " + this.var_362 + ".";
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         if(this.gfx.currentLabel == "end_trying_learn_move")
         {
            if(param1.target instanceof this.DisplayObject)
            {
               _loc2_ = param1.target;
               if(!_loc2_)
               {
                  return false;
               }
               if(_loc2_.name == "stop_learning_butt")
               {
                  this.remove_Me();
               }
               else if(_loc2_.name == "learn_butt")
               {
                  this.remove_Me();
                  this.var_3.show_Replace_Move(this.var_111,this.var_215);
               }
            }
         }
         return false;
      
},"get_Graphic":function(){
         return new this.focus_Trying_New_Move();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.show_UI();
         this.var_3.hit_Play();
      
}}},
"class_971":{parent:"popup",fields:{"var_601":function(){return null;},"var_3":function(){return null;}},imports:["MovieClip", "MouseEvent"],constructors:["focus_Caught"],methods:{"class_971":function(param1, param2){
         this.var_601 = param2;
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         var _loc1_ = "";
         if(this.var_601.myProfile.shiny == 1)
         {
            _loc1_ = "s";
         }
         else if(this.var_601.myProfile.shiny == 2)
         {
            _loc1_ = "ss";
         }
         this.gfx.actual.gfx_poke.gotoAndStop(_loc1_ + this.var_601.myProfile.num);
         this.gfx.actual.whoCaught.text = "You caught a " + this.var_601.myProfile.name + "!";
      
},"mouse_Down":function(param1 = null){
         if(this.gfx.currentLabel == "end")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"get_Graphic":function(){
         return new this.focus_Caught();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.reset_Poke();
         this.var_3.removeChild(this.var_3.currentBallDrag);
         this.var_3.currentBallDrag = null;
         this.var_3.show_UI();
         this.var_3.hit_Play();
      
}}},
"class_972":{parent:"popup",fields:{"var_3":function(){return null;}},imports:["MovieClip", "MouseEvent", "SharedObject"],constructors:["class_977", "popup_Menu_gfx"],methods:{"class_972":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.var_3.hit_Play(true);
         this.var_3.hide_UI();
         this.var_3.pause_Level_Music();
         this.method_40();
      
},"method_40":function(){
         if(this.class_1.var_359 == 1)
         {
            this.gfx.damage_on.gotoAndStop("checked");
            this.gfx.damage_off.gotoAndStop("unchecked");
         }
         else
         {
            this.gfx.damage_on.gotoAndStop("unchecked");
            this.gfx.damage_off.gotoAndStop("checked");
         }
         if(this.class_1.var_25 == 1)
         {
            this.gfx.music_on.gotoAndStop("checked");
            this.gfx.music_off.gotoAndStop("unchecked");
         }
         else
         {
            this.gfx.music_on.gotoAndStop("unchecked");
            this.gfx.music_off.gotoAndStop("checked");
         }
         if(this.class_1.var_194 == 1)
         {
            this.gfx.sound_on.gotoAndStop("checked");
            this.gfx.sound_off.gotoAndStop("unchecked");
         }
         else
         {
            this.gfx.sound_on.gotoAndStop("unchecked");
            this.gfx.sound_off.gotoAndStop("checked");
         }
      
},"mouse_Down":function(param1 = null){
         if(!param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(!_loc2_)
         {
            return false;
         }
         var _loc3_ = this.SharedObject.getLocal("pokeTD");
         if(this.gfx.exit_butt.contains(_loc2_))
         {
            this.var_3.resume_Level_Music();
            this.var_3.show_UI();
            this.var_3.hit_Play();
            this.remove_Me();
            this.var_3.add_Popup(new this.class_977(this.var_3));
            return true;
         }
         if(this.gfx.back_butt.contains(_loc2_))
         {
            this.var_3.resume_Level_Music();
            this.var_3.show_UI();
            this.var_3.hit_Play();
            this.remove_Me();
            return true;
         }
         if(this.gfx.damage_off_butt.contains(_loc2_))
         {
            _loc3_.data.damageText = "off";
            _loc3_.flush();
            this.class_1.var_359 = 0;
            this.method_40();
         }
         else if(this.gfx.damage_on_butt.contains(_loc2_))
         {
            _loc3_.data.damageText = "on";
            _loc3_.flush();
            this.class_1.var_359 = 1;
            this.method_40();
         }
         else if(this.gfx.music_off_butt.contains(_loc2_))
         {
            _loc3_.data.musicSetting = "off";
            _loc3_.flush();
            this.class_1.var_25 = 0;
            this.method_40();
         }
         else if(this.gfx.music_on_butt.contains(_loc2_))
         {
            _loc3_.data.musicSetting = "on";
            _loc3_.flush();
            this.class_1.var_25 = 1;
            this.method_40();
         }
         else if(this.gfx.sound_off_butt.contains(_loc2_))
         {
            _loc3_.data.soundSetting = "off";
            _loc3_.flush();
            this.class_1.var_194 = 0;
            this.method_40();
         }
         else if(this.gfx.sound_on_butt.contains(_loc2_))
         {
            _loc3_.data.soundSetting = "on";
            _loc3_.flush();
            this.class_1.var_194 = 1;
            this.method_40();
         }
         return false;
      
},"get_Graphic":function(){
         return new this.popup_Menu_gfx();
      
},"remove_Me":function(){
         this.__super.remove_Me();
      
}}},
"class_973":{parent:"popup",fields:{"var_3":function(){return null;},"var_15":function(){return 0;},"shinyNum":function(){return 0;}},imports:["MovieClip", "Event", "MouseEvent"],constructors:["popup_Achievement"],methods:{"class_973":function(param1, param2){
         this.var_3 = param1;
         this.shinyNum = param2;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         if(this.shinyNum == 1)
         {
            this.gfx.actual.gotoAndStop("shiny");
         }
         else if(this.shinyNum == 2)
         {
            this.gfx.actual.gotoAndStop("shadow");
         }
         this.var_3.hit_Play(true);
         this.var_3.hide_UI();
         this.var_3.pause_Level_Music();
      
},"run":function(param1 = null){
         return true;
      
},"mouse_Down":function(param1 = null){
         if(this.gfx.currentLabel == "end")
         {
            this.var_3.resume_Level_Music();
            this.var_3.show_UI();
            this.var_3.hit_Play();
            this.remove_Me();
         }
         return false;
      
},"get_Graphic":function(){
         return new this.popup_Achievement();
      
},"remove_Me":function(){
         this.__super.remove_Me();
      
}}},
"class_974":{parent:"popup",fields:{"var_3":function(){return null;}},imports:["MovieClip", "Event"],constructors:["ready_go"],methods:{"class_974":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.gfx.x = 400;
         this.gfx.y = 145;
      
},"run":function(param1 = null){
         if(this.gfx.currentLabel == "end")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"get_Graphic":function(){
         return new this.ready_go();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.start_Level(false);
      
}}},
"class_975":{parent:"popup",fields:{"var_111":function(){return null;},"var_215":function(){return 0;},"pokeProfile":function(){return null;},"var_3":function(){return null;}},imports:["DisplayObject", "MovieClip", "MouseEvent"],constructors:["focus_Replace_Move"],methods:{"class_975":function(param1, param2, param3){
         this.var_111 = param2;
         this.var_215 = param3;
         this.var_3 = param1;
         this.pokeProfile = param2.myProfile;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         var _loc1_ = this.gfx.actual.change_Move_screen;
         _loc1_.hl.visible = false;
         _loc1_.attack_1.gotoAndStop(this.pokeProfile.move1);
         _loc1_.attack_2.gotoAndStop(this.pokeProfile.move2);
         _loc1_.attack_3.gotoAndStop(this.pokeProfile.move3);
         _loc1_.attack_4.gotoAndStop(this.pokeProfile.move4);
         _loc1_.attack_description.gotoAndStop(this.var_215);
         this.gfx.actual.learn_Attack.gotoAndStop(this.var_215);
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         if(this.gfx.currentLabel == "end_replace_move")
         {
            if(param1.target && param1.target instanceof this.DisplayObject)
            {
               _loc2_ = param1.target;
               if(!_loc2_)
               {
                  return false;
               }
               if(_loc2_.name == "done_butt")
               {
                  this.remove_Me();
               }
               else if(_loc2_.name == "attack_1")
               {
                  this.method_27(1);
               }
               else if(_loc2_.name == "attack_2")
               {
                  this.method_27(2);
               }
               else if(_loc2_.name == "attack_3")
               {
                  this.method_27(3);
               }
               else if(_loc2_.name == "attack_4")
               {
                  this.method_27(4);
               }
            }
         }
         return false;
      
},"method_27":function(param1){
         this.var_111.myProfile["move" + param1] = this.var_215;
         if(this.var_111.myProfile.moveSelected == param1)
         {
            this.var_111.reset_Attack();
         }
         var _loc2_ = this.gfx.actual.change_Move_screen["attack_" + param1];
         var _loc3_ = Math.trunc(_loc2_.currentFrame);
         _loc2_.gotoAndStop(this.var_215);
         this.var_215 = _loc3_;
         this.gfx.actual.learn_Attack.gotoAndStop(this.var_215);
         this.gfx.actual.change_Move_screen.attack_description.gotoAndStop(this.var_215);
      
},"get_Graphic":function(){
         return new this.focus_Replace_Move();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.show_UI();
         this.var_3.hit_Play();
      
}}},
"class_976":{parent:"popup",fields:{"var_49":function(){return null;},"var_659":function(){return null;},"var_636":function(){return null;},"var_590":function(){return null;},"var_3":function(){return null;},"var_628":function(){return false;}},imports:["Tween", "Strong", "MovieClip", "Event", "MouseEvent", "TimerEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform", "Timer"],constructors:["SoundTransform", "Timer", "Tween", "cry_009", "movie_scene_win_1", "regularHitSound", "rival_song"],methods:{"class_976":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.var_3.hit_Play(true);
         this.var_3.hide_UI();
         this.var_49 = new this.movie_scene_win_1();
         this.var_3.gfx_BG.addChild(this.var_49);
         this.var_49.gotoAndStop(1);
         this.var_659 = new this.Tween(this.var_3.gfx_BG,"x",this.Strong.easeOut,this.var_3.gfx_BG.x,100,1,true);
         this.var_659.start();
         this.var_636 = new this.Tween(this.var_3.gfx_BG,"y",this.Strong.easeOut,this.var_3.gfx_BG.y,10,1,true);
         this.var_636.start();
         this.var_590 = new this.Timer(1000,0);
         this.var_590.addEventListener("timer",this.method_176);
         this.var_590.start();
         if(this.main.playerProfile.levelUnlocked == 0)
         {
            this.var_49.butt_skip.visible = false;
         }
      
},"method_176":function(param1){
         this.var_590.removeEventListener("timer",this.method_176);
         this.var_590.stop();
         this.var_636 = null;
         this.var_659 = null;
         this.var_49.play();
      
},"mouse_Down":function(param1 = null){
         if(!param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(!_loc2_)
         {
            return false;
         }
         if(_loc2_.name == "butt_next")
         {
            this.var_49.play();
            return true;
         }
         if(_loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"run":function(param1 = null){
         var _loc2_ = null;
         var _loc3_ = null;
         var _loc4_ = null;
         if(!this.var_49)
         {
            return false;
         }
         if(this.var_49.currentLabel == "end")
         {
            this.remove_Me();
            return true;
         }
         if(this.var_49.currentLabel == "gary_shows")
         {
            this.SoundMixer.stopAll();
            _loc2_ = new this.rival_song();
            _loc3_ = _loc2_.play(0,10);
            _loc4_ = new this.SoundTransform(this.class_1.var_25);
            _loc3_.soundTransform = _loc4_;
         }
         else if(this.var_49.currentLabel == "blast_show")
         {
            _loc2_ = new this.cry_009();
            _loc3_ = _loc2_.play(0,1);
            _loc4_ = new this.SoundTransform(this.class_1.var_194);
            _loc3_.soundTransform = _loc4_;
         }
         else if(this.var_49.currentLabel == "hits")
         {
            if(this.var_628)
            {
               this.var_628 = false;
               return true;
            }
            this.var_628 = true;
            _loc2_ = new this.regularHitSound();
            _loc3_ = _loc2_.play(0,1);
            _loc4_ = new this.SoundTransform(this.class_1.var_194);
            _loc3_.soundTransform = _loc4_;
         }
         return false;
      
},"get_Graphic":function(){
         return null;
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.SoundMixer.stopAll();
         this.var_3.end_Level();
      
}}},
"class_977":{parent:"popup",fields:{"var_3":function(){return null;}},imports:["MovieClip", "MouseEvent"],constructors:["popup_Exit_Level"],methods:{"class_977":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.var_3.hit_Play(true);
         this.var_3.hide_UI();
         this.var_3.pause_Level_Music();
      
},"mouse_Down":function(param1 = null){
         if(!param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(!_loc2_)
         {
            return false;
         }
         if(_loc2_.name == "butt_yes")
         {
            this.remove_Me();
            this.var_3.end_Level();
            return true;
         }
         if(_loc2_.name == "butt_no")
         {
            this.var_3.resume_Level_Music();
            this.var_3.show_UI();
            this.var_3.hit_Play();
            this.remove_Me();
            return true;
         }
         return false;
      
},"get_Graphic":function(){
         return new this.popup_Exit_Level();
      
},"remove_Me":function(){
         this.__super.remove_Me();
      
}}},
"class_978":{parent:"popup",fields:{"var_3":function(){return null;}},imports:["MovieClip", "MouseEvent"],constructors:["popup_How_To_Play"],methods:{"class_978":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         if(this.var_3)
         {
            this.var_3.gfx_BG.alpha = 0.3;
            this.var_3.gfx_UI.alpha = 0.3;
         }
         this.gfx.x = 20;
         this.gfx.y = 37;
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         if(Boolean(param1.target) && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            if(_loc2_.name == "butt_next")
            {
               this.gfx.gotoAndStop(this.gfx.currentFrame + 1);
               return true;
            }
            if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip")
            {
               this.remove_Me();
               return true;
            }
         }
         return false;
      
},"get_Graphic":function(){
         return new this.popup_How_To_Play();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_BG.alpha = 1;
         this.var_3.gfx_UI.alpha = 1;
         this.var_3.start_Level();
      
}}},
"class_979":{parent:"popup",fields:{"var_111":function(){return null;},"var_362":function(){return null;},"var_3":function(){return null;}},imports:["MovieClip", "MouseEvent"],constructors:["focus_New_Move"],methods:{"class_979":function(param1, param2, param3){
         this.var_111 = param2;
         this.var_362 = param3;
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         var _loc1_ = "";
         if(this.var_111.myProfile.shiny == 2)
         {
            _loc1_ = "ss";
         }
         else if(this.var_111.myProfile.shiny == 1)
         {
            _loc1_ = "s";
         }
         this.gfx.actual.gfx_poke.gotoAndStop(_loc1_ + this.var_111.myProfile.num);
         this.gfx.actual.moveText.text = this.var_111.myProfile.name + " learned " + this.var_362 + "!";
      
},"mouse_Down":function(param1 = null){
         if(this.gfx.currentLabel == "end_learn_move")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"get_Graphic":function(){
         return new this.focus_New_Move();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.show_UI();
         this.var_3.hit_Play();
      
}}},
"class_981":{parent:"popup",fields:{"var_165":function(){return null;},"var_688":function(){return 0;}},imports:["MovieClip", "MouseEvent"],constructors:["popup_Choose_Name"],methods:{"class_981":function(param1, param2){
         this.var_165 = param1;
         this.var_688 = param2;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.var_165.gfx_BG.alpha = 0.4;
      
},"remove_Me":function(){
         this.var_165.gfx_BG.alpha = 1;
         this.__super.remove_Me();
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         if(this.gfx.currentLabel == "end")
         {
            if(param1.target instanceof this.MovieClip)
            {
               _loc2_ = param1.target;
               if(!_loc2_)
               {
                  return false;
               }
               if(this.gfx.actual.ok_butt.contains(_loc2_))
               {
                  this.var_165.method_155(this.var_688,true,this.gfx.actual.your_Name.text);
                  this.remove_Me();
                  this.var_165.method_260();
               }
               else if(this.gfx.actual.cancel_butt.contains(_loc2_))
               {
                  this.remove_Me();
               }
               return true;
            }
            return false;
         }
         return false;
      
},"get_Graphic":function(){
         return new this.popup_Choose_Name();
      
}}},
"class_982":{parent:"popup",fields:{"var_165":function(){return null;},"var_688":function(){return 0;}},imports:["MovieClip", "MouseEvent"],constructors:["class_981", "popup_Profile_Delete"],methods:{"class_982":function(param1, param2){
         this.var_165 = param1;
         this.var_688 = param2;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.var_165.gfx_BG.alpha = 0.4;
      
},"remove_Me":function(){
         this.var_165.gfx_BG.alpha = 1;
         this.__super.remove_Me();
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         if(this.gfx.currentLabel == "end")
         {
            if(param1.target instanceof this.MovieClip)
            {
               _loc2_ = param1.target;
               if(!_loc2_)
               {
                  return false;
               }
               if(this.gfx.actual.yes_butt.contains(_loc2_))
               {
                  this.remove_Me();
                  this.var_165.add_Popup(new this.class_981(this.var_165,this.var_688));
               }
               else if(this.gfx.actual.no_butt.contains(_loc2_))
               {
                  this.remove_Me();
               }
               return true;
            }
            return false;
         }
         return false;
      
},"get_Graphic":function(){
         return new this.popup_Profile_Delete();
      
}}},
"class_984":{parent:"popup",fields:{"var_3":function(){return null;},"var_22":function(){return 1;},"var_21":function(){return null;},"var_669":function(){return null;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "ash_song", "class_954", "movie_scene_intro_17", "mt_moon_song", "route10Music", "team_rocket_music"],methods:{"class_984":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         if(this.var_3)
         {
            this.var_3.gfx_BG.visible = false;
            this.var_3.gfx_UI.visible = false;
         }
         this.gfx.butt_skip.visible = false;
         if(this.main.playerProfile.myAvatarGender)
         {
            this.var_21 = this.main.playerProfile.myAvatarGender;
            this.var_22 = this.main.playerProfile.myAvatarStyle;
         }
         this.gfx.addEventListener("frameConstructed",this.method_8);
      
},"method_263":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.team_rocket_music();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_127":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.mt_moon_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_205":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.ash_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_201":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.route10Music();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"run":function(param1 = null){
         if(this.gfx.currentLabel == "mtmoon" || this.gfx.currentLabel == "mtmoon2")
         {
            this.method_127();
         }
         else if(this.gfx.currentLabel == "onix")
         {
            this.method_5("095");
         }
         else if(this.gfx.currentLabel == "route10")
         {
            this.method_201();
         }
         return false;
      
},"method_8":function(param1){
         if(this.gfx.nicknameText && this.gfx.nicknameText.text == "")
         {
            this.gfx.nicknameText.text = this.var_669 + ", light up this cave with your Flash!";
         }
         var _loc2_ = this.var_21 + "_" + this.var_22;
         if(this.gfx.yourAvatar && this.gfx.yourAvatar.currentLabel != _loc2_)
         {
            this.gfx.yourAvatar.gotoAndStop(_loc2_);
         }
         else if(this.gfx.yourAvatarWalk && this.gfx.yourAvatarWalk.currentLabel != _loc2_)
         {
            this.gfx.yourAvatarWalk.gotoAndPlay(_loc2_);
         }
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         var _loc3_ = null;
         var _loc4_ = null;
         if(param1.target && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            if(_loc2_.name == "butt_next")
            {
               if(this.gfx.currentLabel == "lose")
               {
                  this.var_3.end_Level();
                  return true;
               }
               if(this.gfx.currentLabel == "checkFlash")
               {
                  if(this.method_274())
                  {
                     this.gfx.gotoAndPlay("haveFlash");
                     return true;
                  }
               }
               else if(this.gfx.currentLabel == "end_mtmoon2")
               {
                  _loc3_ = [false,false,false,false,false,false,false,false];
                  _loc4_ = new this.class_954(this.var_3.my_Parent,_loc3_);
                  this.send_Msg(["change_Screen",_loc4_]);
                  return true;
               }
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip")
            {
               this.remove_Me();
               return true;
            }
         }
         return false;
      
},"method_274":function(){
         var _loc2_ = Math.trunc(0);
         var _loc1_ = Math.trunc(0);
         var _loc3_ = null;
         var _loc4_ = Math.trunc(0);
         _loc2_ = Math.trunc(0);
         while(_loc2_ < this.main.playerProfile.partyList.length)
         {
            _loc3_ = this.main.playerProfile.partyList[_loc2_];
            if(_loc3_)
            {
               _loc1_ = Math.trunc(1);
               while(_loc1_ <= 4)
               {
                  _loc4_ = Math.trunc(Math.trunc(_loc3_["move" + _loc1_]));
                  if(_loc4_ == 225)
                  {
                     this.var_669 = _loc3_.nickname;
                     return true;
                  }
                  _loc1_++;
               }
            }
            _loc2_++;
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_intro_17();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_BG.visible = true;
         this.var_3.gfx_UI.visible = true;
         this.var_3.start_Level();
      
}}},
"class_985":{parent:"popup",fields:{"var_3":function(){return null;},"var_22":function(){return 1;},"var_21":function(){return null;},"var_87":function(){return 0;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform", "class_23", "class_69", "class_70", "class_71", "class_72", "wave"],constructors:["SoundTransform", "ash_song", "class_23", "class_69", "class_70", "class_71", "class_72", "class_956", "class_984", "movie_scene_intro_17_space_1", "mt_moon_song", "profile_poke", "profile_poke_val", "route10Music", "team_rocket_music"],methods:{"class_985":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         if(this.var_3)
         {
            this.var_3.gfx_BG.visible = false;
            this.var_3.gfx_UI.visible = false;
         }
         this.gfx.butt_skip.visible = false;
         if(this.main.playerProfile.myAvatarGender)
         {
            this.var_21 = this.main.playerProfile.myAvatarGender;
            this.var_22 = this.main.playerProfile.myAvatarStyle;
         }
         this.gfx.addEventListener("frameConstructed",this.method_8);
         var _loc1_ = this.main.playerProfile.haveThisExtraInfo(32);
         var _loc2_ = this.main.playerProfile.haveThisExtraInfo(33);
         if(!_loc1_ || _loc2_)
         {
            this.gfx.quest.visible = false;
         }
         else
         {
            this.gfx.gotoAndStop("shinyQuest");
         }
      
},"method_263":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.team_rocket_music();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_127":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.mt_moon_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_205":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.ash_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_201":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.route10Music();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"run":function(param1 = null){
         if(this.gfx.currentLabel == "mtmoon" || this.gfx.currentLabel == "mtmoon2")
         {
            this.method_127();
         }
         else if(this.gfx.currentLabel == "zubat")
         {
            this.method_5("041");
         }
         else if(this.gfx.currentLabel == "route10")
         {
            this.method_201();
         }
         return false;
      
},"method_8":function(param1){
         var _loc2_ = this.var_21 + "_" + this.var_22;
         if(this.gfx.yourAvatar && this.gfx.yourAvatar.currentLabel != _loc2_)
         {
            this.gfx.yourAvatar.gotoAndStop(_loc2_);
         }
         else if(this.gfx.yourAvatarWalk && this.gfx.yourAvatarWalk.currentLabel != _loc2_)
         {
            this.gfx.yourAvatarWalk.gotoAndPlay(_loc2_);
         }
      
},"mouse_Down":function(param1 = null){
         var _loc5_ = null;
         var _loc2_ = Math.trunc(0);
         var _loc4_ = null;
         var _loc3_ = null;
         if(param1.target && param1.target instanceof this.MovieClip)
         {
            _loc5_ = param1.target;
            if(!_loc5_)
            {
               return false;
            }
            if(_loc5_.name == "butt_next")
            {
               if(this.gfx.currentLabel == "lose")
               {
                  this.var_3.end_Level();
                  return true;
               }
               if(this.gfx.currentLabel == "randomPoke")
               {
                  _loc2_ = Math.trunc(Math.random() * 100);
                  if(_loc2_ <= 50)
                  {
                     this.var_87 = 41;
                     this.gfx.gotoAndPlay("randomZubat");
                  }
                  else if(_loc2_ <= 76)
                  {
                     this.var_87 = 74;
                     this.gfx.gotoAndPlay("randomGeodude");
                  }
                  else if(_loc2_ <= 84)
                  {
                     this.var_87 = 95;
                     this.gfx.gotoAndPlay("randomOnix");
                  }
                  else if(_loc2_ <= 92)
                  {
                     this.var_87 = 100;
                     this.gfx.gotoAndPlay("randomVoltorb");
                  }
                  else if(_loc2_ <= 100)
                  {
                     this.var_87 = 66;
                     this.gfx.gotoAndPlay("randomMachop");
                  }
                  return true;
               }
               if(this.gfx.currentLabel == "shinyQuest")
               {
                  if(this.method_238())
                  {
                     this.gfx.gotoAndStop("gotShinyHunt");
                  }
                  else
                  {
                     this.gfx.gotoAndStop("noShinyHunt");
                  }
                  return true;
               }
               if(this.gfx.currentLabel == "gotShinyHunt" || this.gfx.currentLabel == "noShinyHunt")
               {
                  this.gfx.gotoAndPlay(1);
                  return true;
               }
               if(this.gfx.currentLabel == "end_mtmoon2")
               {
                  this.var_3.remove_Popup(this);
                  this.var_3.add_Popup(new this.class_984(this.var_3));
                  return true;
               }
               if(this.gfx.currentLabel == "goToTwo")
               {
                  _loc4_ = this.var_3;
                  _loc3_ = new this.class_956(this.var_3.my_Parent,_loc4_.var_68);
                  this.send_Msg(["change_Screen",_loc3_]);
                  return true;
               }
               this.gfx.play();
               return true;
            }
            if(_loc5_.name == "btn_left")
            {
               this.gfx.play();
               return true;
            }
            if(_loc5_.name == "btn_right")
            {
               this.gfx.gotoAndPlay("goRight");
               return true;
            }
            if(_loc5_.name == "butt_close" || _loc5_.name == "butt_skip")
            {
               this.remove_Me();
               return true;
            }
         }
         return false;
      
},"method_238":function(){
         var _loc3_ = Math.trunc(0);
         var _loc6_ = null;
         var _loc1_ = false;
         var _loc2_ = false;
         if(this.main.playerProfile.is_Legal())
         {
            return false;
         }
         var _loc5_ = Math.trunc(this.send_Msg("getPikachuCount"));
         if(_loc5_ < 10)
         {
            return false;
         }
         _loc3_ = Math.trunc(0);
         while(_loc3_ < this.main.playerProfile.partyList.length)
         {
            _loc6_ = this.main.playerProfile.partyList[_loc3_];
            if(_loc6_ && _loc6_.level >= 42 && _loc6_.num == 25 && _loc6_.myTag != "h")
            {
               _loc1_ = true;
               break;
            }
            _loc3_++;
         }
         if(!_loc1_)
         {
            return false;
         }
         _loc3_ = Math.trunc(0);
         while(_loc3_ < this.main.playerProfile.partyList.length)
         {
            _loc6_ = this.main.playerProfile.partyList[_loc3_];
            if(_loc6_ && _loc6_.level >= 42 && _loc6_.num == 101 && _loc6_.myTag != "h")
            {
               _loc2_ = true;
               break;
            }
            _loc3_++;
         }
         if(!_loc2_)
         {
            return false;
         }
         this.main.playerProfile.addExtraInfo(33);
         var _loc4_ = new this.profile_poke();
         _loc4_.num = 100;
         this.finder_Poke_Info.get_Poke_Info(_loc4_);
         _loc4_.level = 5;
         _loc4_.move1 = 1;
         _loc4_.numMoves = 1;
         _loc4_.moveSelected = 1;
         _loc4_.shiny = 1;
         _loc4_.id = ++this.main.playerProfile.latestID;
         _loc4_.experience = 0;
         _loc4_.var_179 = _loc4_.level;
         _loc4_.var_175 = _loc4_.num;
         _loc4_.val = new this.profile_poke_val();
         _loc4_.saveInfo.needCaptured = true;
         _loc4_.saveInfo.extra = 6;
         _loc4_.val.reset(_loc4_);
         this.main.playerProfile.update_Pokedex(_loc4_);
         this.main.playerProfile.pokeList.push(_loc4_);
         return true;
      
},"get_Graphic":function(){
         return new this.movie_scene_intro_17_space_1();
      
},"remove_Me":function(){
         var _loc1_ = null;
         this.__super.remove_Me();
         this.var_3.gfx_BG.visible = true;
         this.var_3.gfx_UI.visible = true;
         if(this.var_87 == 41)
         {
            _loc1_ = new this.class_23(this.var_3);
         }
         else if(this.var_87 == 74)
         {
            _loc1_ = new this.class_71(this.var_3);
         }
         else if(this.var_87 == 95)
         {
            _loc1_ = new this.class_70(this.var_3);
         }
         else if(this.var_87 == 100)
         {
            _loc1_ = new this.class_72(this.var_3);
         }
         else if(this.var_87 == 66)
         {
            _loc1_ = new this.class_69(this.var_3);
         }
         this.var_3.start_Level(true,false,_loc1_);
      
}}},
"class_986":{parent:"popup",fields:{"var_3":function(){return null;},"var_22":function(){return 1;},"var_21":function(){return null;}},imports:["MovieClip", "Event", "MouseEvent"],constructors:[],methods:{"class_986":function(param1, param2){
         this.var_3 = param1;
         this.gfx = param2;
         this.__baseConstructor(param1);
      
},"init":function(){
         if(this.gfx)
         {
            this.addChild(this.gfx);
         }
         this.var_3.hit_Play(true);
         this.var_3.hide_UI();
         if(this.main.playerProfile.myAvatarGender)
         {
            this.var_21 = this.main.playerProfile.myAvatarGender;
            this.var_22 = this.main.playerProfile.myAvatarStyle;
         }
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         if(!param1.target instanceof this.MovieClip)
         {
            return false;
         }
         if(this.gfx.currentLabel == "end")
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            if(this.gfx.actual.butt_close.contains(_loc2_))
            {
               this.remove_Me();
               return true;
            }
         }
         return false;
      
},"run":function(param1 = null){
         if(this.gfx.actual.yourAvatar)
         {
            this.gfx.actual.yourAvatar.gotoAndStop(this.var_21 + "_" + this.var_22);
         }
         return false;
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.end_Level();
      
}}},
"class_987":{parent:"popup",fields:{"var_49":function(){return null;},"var_3":function(){return null;}},imports:["MovieClip", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_Win_9", "victory_song"],methods:{"class_987":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         this.var_3.hit_Play(true);
         this.var_3.hide_UI();
         this.method_182();
      
},"method_182":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.victory_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(!_loc2_)
         {
            return false;
         }
         if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_Win_9();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.end_Level();
      
}}},
"class_988":{parent:"popup",fields:{"var_3":function(){return null;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "ash_song", "movie_scene_intro_9", "mt_moon_song", "rival_song", "team_rocket_music"],methods:{"class_988":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         if(this.var_3)
         {
            this.var_3.gfx_BG.visible = false;
            this.var_3.gfx_UI.visible = false;
         }
         if(this.main.playerProfile.lastLevelVisited < 9 && this.main.playerProfile.levelUnlocked < 9)
         {
            this.gfx.butt_skip.visible = false;
         }
      
},"method_263":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.team_rocket_music();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_191":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.rival_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_205":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.ash_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_218":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.mt_moon_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"run":function(param1 = null){
         if(this.gfx.currentLabel == "teamRocket")
         {
            this.method_263();
         }
         else if(this.gfx.currentLabel == "gary")
         {
            this.method_191();
         }
         else if(this.gfx.currentLabel == "ash")
         {
            this.method_205();
         }
         else if(this.gfx.currentLabel == "mt_moon" || this.gfx.currentLabel == "mt_moon_2")
         {
            this.method_218();
         }
         else if(this.gfx.currentLabel == "zapdos")
         {
            this.method_5("145");
         }
         return false;
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         if(Boolean(param1.target) && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            if(_loc2_.name == "butt_next")
            {
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip")
            {
               this.remove_Me();
               return true;
            }
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_intro_9();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_BG.visible = true;
         this.var_3.gfx_UI.visible = true;
         this.var_3.start_Level();
      
}}},
"class_989":{parent:"popup",fields:{"var_3":function(){return null;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "battleGymMusic", "gymMusic", "levelUpSound", "movie_scene_Intro_6", "team_rocket_music", "victory_gym_song"],methods:{"class_989":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         if(this.var_3)
         {
            this.var_3.gfx_UI.visible = false;
         }
         if(this.main.playerProfile.lastLevelVisited < 6 && this.main.playerProfile.levelUnlocked < 6)
         {
            this.gfx.butt_skip.visible = false;
         }
      
},"method_263":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.team_rocket_music();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_217":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.gymMusic();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_186":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.battleGymMusic();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_254":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.victory_gym_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_284":function(){
         var _loc1_ = new this.levelUpSound();
         var _loc2_ = _loc1_.play(0,1);
         var _loc3_ = new this.SoundTransform(this.class_1.var_194);
         _loc2_.soundTransform = _loc3_;
      
},"run":function(param1 = null){
         if(this.gfx.currentLabel == "teamrocket")
         {
            this.method_263();
         }
         else if(this.gfx.currentLabel == "gym" || this.gfx.currentLabel == "gym_2")
         {
            this.method_217();
         }
         else if(this.gfx.currentLabel == "gym_battle")
         {
            this.method_186();
         }
         else if(this.gfx.currentLabel == "gym_victory")
         {
            this.method_254();
         }
         else if(this.gfx.currentLabel == "level_up")
         {
            this.method_284();
         }
         else if(this.gfx.currentLabel == "onix")
         {
            this.method_5("095");
         }
         else if(this.gfx.currentLabel == "hypno")
         {
            this.method_5("097");
         }
         else if(this.gfx.currentLabel == "beedrill")
         {
            this.method_5("015");
         }
         else if(this.gfx.currentLabel == "stopMusic")
         {
            this.SoundMixer.stopAll();
         }
         else if(this.gfx.currentLabel == "end_intro")
         {
            this.remove_Me();
         }
         return false;
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         if(Boolean(param1.target) && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            if(_loc2_.name == "butt_next")
            {
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip")
            {
               this.remove_Me();
               return true;
            }
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_Intro_6();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         if(this.main.playerProfile.badges < 1)
         {
            this.main.playerProfile.badges = 1;
            this.main.playerProfile.save_Profile();
         }
         this.var_3.gfx_UI.visible = true;
         this.var_3.start_Level();
      
}}},
"class_990":{parent:"popup",fields:{"var_49":function(){return null;},"var_3":function(){return null;}},imports:["MovieClip", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_Win_6", "victory_song"],methods:{"class_990":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         this.var_3.hit_Play(true);
         this.var_3.hide_UI();
         this.method_182();
      
},"method_182":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.victory_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(!_loc2_)
         {
            return false;
         }
         if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_Win_6();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.end_Level();
      
}}},
"class_991":{parent:"popup",fields:{"var_49":function(){return null;},"var_3":function(){return null;}},imports:["MovieClip", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_Level_30_Win", "victory_song"],methods:{"class_991":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         this.var_3.hit_Play(true);
         this.var_3.hide_UI();
         this.method_182();
      
},"method_182":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.victory_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(!_loc2_)
         {
            return false;
         }
         if(_loc2_.name == "butt_next")
         {
            this.gfx.actual.play();
         }
         else if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_Level_30_Win();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.end_Level();
      
}}},
"class_992":{parent:"popup",fields:{"var_3":function(){return null;},"var_22":function(){return 1;},"var_21":function(){return null;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "ash_song", "ceruleanMusic", "movie_scene_intro_30"],methods:{"class_992":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         if(this.var_3)
         {
            this.var_3.gfx_BG.visible = false;
            this.var_3.gfx_UI.visible = false;
         }
         if(this.main.playerProfile.lastLevelVisited < 30 && this.main.playerProfile.levelUnlocked < 30)
         {
            this.gfx.butt_skip.visible = false;
         }
         if(this.main.playerProfile.myAvatarGender)
         {
            this.var_21 = this.main.playerProfile.myAvatarGender;
            this.var_22 = this.main.playerProfile.myAvatarStyle;
         }
         this.gfx.addEventListener("frameConstructed",this.method_8);
      
},"method_199":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.ash_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_213":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.ceruleanMusic();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"run":function(param1 = null){
         if(this.gfx.currentLabel == "ash_song")
         {
            this.method_199();
         }
         else if(this.gfx.currentLabel == "city")
         {
            this.method_213();
         }
         else if(this.gfx.currentLabel == "zapdos" || this.gfx.currentLabel == "zapdos_2")
         {
            this.method_5("145");
         }
         return false;
      
},"method_8":function(param1){
         var _loc2_ = this.var_21 + "_" + this.var_22;
         if(Boolean(this.gfx.yourAvatar) && this.gfx.yourAvatar.currentLabel != _loc2_)
         {
            this.gfx.yourAvatar.gotoAndStop(_loc2_);
         }
         else if(Boolean(this.gfx.yourAvatarWalk) && this.gfx.yourAvatarWalk.currentLabel != _loc2_)
         {
            this.gfx.yourAvatarWalk.gotoAndPlay(_loc2_);
         }
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         if(Boolean(param1.target) && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            if(_loc2_.name == "butt_next")
            {
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip")
            {
               this.remove_Me();
               return true;
            }
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_intro_30();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_BG.visible = true;
         this.var_3.gfx_UI.visible = true;
         this.var_3.start_Level();
      
}}},
"class_993":{parent:"popup",fields:{"var_49":function(){return null;},"var_3":function(){return null;}},imports:["MovieClip", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_Challenge_Win_5", "victory_gym_song"],methods:{"class_993":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         this.var_3.hit_Play(true);
         this.var_3.hide_UI();
         this.method_182();
      
},"method_182":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.victory_gym_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(!_loc2_)
         {
            return false;
         }
         if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_Challenge_Win_5();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         if(this.main.playerProfile.badges < 1)
         {
            this.main.playerProfile.badges = 1;
         }
         this.var_3.end_Level();
      
}}},
"class_994":{parent:"popup",fields:{"var_49":function(){return null;},"var_3":function(){return null;}},imports:["MovieClip", "MouseEvent", "SoundMixer"],constructors:["movie_scene_Challenge_Intro_5"],methods:{"class_994":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         if(this.var_3)
         {
            this.var_3.gfx_UI.visible = false;
         }
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(!_loc2_)
         {
            return false;
         }
         if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_Challenge_Intro_5();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_UI.visible = true;
         this.var_3.start_Level();
      
}}},
"class_995":{parent:"popup",fields:{"var_3":function(){return null;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_win_14", "mt_moon_song", "regularHitSound", "route4Music", "vermillionMusic"],methods:{"class_995":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.var_3.hit_Play(true);
         this.var_3.hide_UI();
         this.var_3.gfx_BG.visible = false;
         if(this.main.playerProfile.levelUnlocked < 14)
         {
            this.gfx.butt_skip.visible = false;
         }
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         if(param1.target && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            if(_loc2_.name == "butt_next")
            {
               if(this.gfx.currentLabel == "trade_time")
               {
                  if(this.var_3.var_660 && (this.main.playerProfile.clevel1CodeUsed.length < 3 || this.main.playerProfile.clevel1CodeUsed.charAt(2) != "1"))
                  {
                     this.gfx.play();
                  }
                  else
                  {
                     this.gfx.gotoAndPlay("after_trade");
                  }
                  return true;
               }
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip")
            {
               this.remove_Me();
               return true;
            }
            if(_loc2_.name == "butt_yes")
            {
               this.method_327();
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "butt_no")
            {
               this.gfx.play();
               return true;
            }
         }
         return false;
      
},"method_327":function(){
         var _loc1_ = this.var_3.var_660;
         _loc1_.num = 83;
         _loc1_.level = 1;
         _loc1_.experience = 0;
         _loc1_.move1 = 42;
         _loc1_.move2 = 2;
         _loc1_.move3 = 43;
         _loc1_.move4 = 0;
         _loc1_.moveSelected = 1;
         _loc1_.numMoves = 3;
         _loc1_.nickname = "Farfetch\'d";
         _loc1_.var_179 = _loc1_.level;
         _loc1_.var_175 = _loc1_.num;
         _loc1_.var_469 = 0;
         _loc1_.var_343 = 0;
         _loc1_.whoMe = "bx";
         _loc1_.saveInfo.needTrade = true;
         _loc1_.val.reset(_loc1_);
         this.main.playerProfile.update_Pokedex(_loc1_);
         this.finder_Poke_Info.get_Poke_Info(_loc1_);
      
},"method_237":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.vermillionMusic();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_294":function(){
         var _loc1_ = new this.regularHitSound();
         var _loc2_ = _loc1_.play(0,1);
         var _loc3_ = new this.SoundTransform(this.class_1.var_194);
         _loc2_.soundTransform = _loc3_;
      
},"method_180":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.route4Music();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_218":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.mt_moon_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"run":function(param1 = null){
         if(this.gfx.currentLabel == "vermillion")
         {
            this.method_237();
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_win_14();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.SoundMixer.stopAll();
         this.var_3.end_Level();
      
}}},
"class_996":{parent:"popup",fields:{"var_3":function(){return null;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_intro_14", "team_rocket_music", "vermillionMusic"],methods:{"class_996":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         if(this.var_3)
         {
            this.var_3.gfx_BG.visible = false;
            this.var_3.gfx_UI.visible = false;
         }
         if(this.main.playerProfile.lastLevelVisited < 14 && this.main.playerProfile.levelUnlocked < 14)
         {
            this.gfx.butt_skip.visible = false;
         }
      
},"method_237":function(){
         var _loc3_ = null;
         this.SoundMixer.stopAll();
         var _loc1_ = new this.vermillionMusic();
         var _loc2_ = _loc1_.play(0,10);
         if(_loc2_)
         {
            _loc3_ = new this.SoundTransform(this.class_1.var_25);
            _loc2_.soundTransform = _loc3_;
         }
      
},"method_263":function(){
         var _loc3_ = null;
         this.SoundMixer.stopAll();
         var _loc1_ = new this.team_rocket_music();
         var _loc2_ = _loc1_.play(0,10);
         if(_loc2_)
         {
            _loc3_ = new this.SoundTransform(this.class_1.var_25);
            _loc2_.soundTransform = _loc3_;
         }
      
},"run":function(param1 = null){
         if(this.gfx.currentLabel == "showBG")
         {
            this.var_3.gfx_BG.visible = true;
         }
         else if(this.gfx.currentLabel == "vermillion")
         {
            this.method_237();
         }
         else if(this.gfx.currentLabel == "charmeleon")
         {
            this.method_5("005");
         }
         else if(this.gfx.currentLabel == "poliwhirl")
         {
            this.method_5("061");
         }
         else if(this.gfx.currentLabel == "teamRocket")
         {
            this.method_263();
         }
         return false;
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         if(Boolean(param1.target) && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            if(_loc2_.name == "butt_next")
            {
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip")
            {
               this.remove_Me();
               return true;
            }
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_intro_14();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_BG.visible = true;
         this.var_3.gfx_UI.visible = true;
         this.var_3.start_Level();
      
}}},
"class_997":{parent:"popup",fields:{"var_3":function(){return null;},"var_22":function(){return 1;},"var_21":function(){return null;}},imports:["MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "cinnabarMusic", "movie_scene_intro_33", "oceanMusic"],methods:{"class_997":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         if(this.var_3)
         {
            this.var_3.gfx_BG.visible = false;
            this.var_3.gfx_UI.visible = false;
         }
         if(this.main.playerProfile.lastLevelVisited < 33 && this.main.playerProfile.levelUnlocked < 33)
         {
            this.gfx.butt_skip.visible = false;
         }
         if(this.main.playerProfile.myAvatarGender)
         {
            this.var_21 = this.main.playerProfile.myAvatarGender;
            this.var_22 = this.main.playerProfile.myAvatarStyle;
         }
         this.gfx.addEventListener("frameConstructed",this.method_8);
      
},"method_199":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.cinnabarMusic();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_213":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.oceanMusic();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"run":function(param1 = null){
         if(this.gfx.currentLabel == "island")
         {
            this.method_199();
         }
         else if(this.gfx.currentLabel == "ocean")
         {
            this.method_213();
         }
         return false;
      
},"method_8":function(param1){
         var _loc2_ = this.var_21 + "_" + this.var_22;
         if(Boolean(this.gfx.yourAvatar) && this.gfx.yourAvatar.currentLabel != _loc2_)
         {
            this.gfx.yourAvatar.gotoAndStop(_loc2_);
         }
         else if(Boolean(this.gfx.yourAvatarWalk) && this.gfx.yourAvatarWalk.currentLabel != _loc2_)
         {
            this.gfx.yourAvatarWalk.gotoAndPlay(_loc2_);
         }
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         if(Boolean(param1.target) && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            if(_loc2_.name == "butt_next")
            {
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip")
            {
               this.remove_Me();
               return true;
            }
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_intro_33();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_BG.visible = true;
         this.var_3.gfx_UI.visible = true;
         this.var_3.start_Level();
      
}}},
"class_998":{parent:"popup",fields:{"var_49":function(){return null;},"var_3":function(){return null;},"var_276":function(){return false;}},imports:["MovieClip", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_Level_33_Win", "profile_poke", "profile_poke_val", "victory_song"],methods:{"class_998":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         this.var_3.hit_Play(true);
         this.var_3.hide_UI();
         this.method_182();
         if(!this.var_3.var_334)
         {
            if(this.var_3.var_556)
            {
               this.gfx.actual.gotoAndStop("aero");
               this.method_106();
               return;
            }
            this.gfx.actual.gotoAndStop("end");
         }
      
},"method_182":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.victory_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(!_loc2_)
         {
            return false;
         }
         if(_loc2_.name == "butt_next")
         {
            this.gfx.actual.play();
         }
         else if(_loc2_.name == "butt_kabuto")
         {
            if(!this.var_276)
            {
               this.var_276 = true;
               this.method_111();
            }
            this.gfx.actual.play();
         }
         else if(_loc2_.name == "butt_omanyte")
         {
            if(!this.var_276)
            {
               this.var_276 = true;
               this.method_113();
            }
            this.gfx.actual.play();
         }
         else if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"method_111":function(){
         var _loc1_ = new this.profile_poke();
         _loc1_.num = 140;
         this.finder_Poke_Info.get_Poke_Info(_loc1_);
         _loc1_.level = 1;
         _loc1_.move1 = 6;
         _loc1_.numMoves = 1;
         _loc1_.moveSelected = 1;
         _loc1_.id = ++this.main.playerProfile.latestID;
         _loc1_.experience = 0;
         _loc1_.var_179 = _loc1_.level;
         _loc1_.var_175 = _loc1_.num;
         _loc1_.val = new this.profile_poke_val();
         _loc1_.saveInfo.needCaptured = true;
         _loc1_.saveInfo.extra = 168;
         _loc1_.shiny = 1;
         _loc1_.val.reset(_loc1_);
         if(_loc1_.name != "Kabuto")
         {
            return;
         }
         this.main.playerProfile.update_Pokedex(_loc1_);
         this.main.playerProfile.pokeList.push(_loc1_);
      
},"method_113":function(){
         var _loc1_ = new this.profile_poke();
         _loc1_.num = 138;
         this.finder_Poke_Info.get_Poke_Info(_loc1_);
         _loc1_.level = 1;
         _loc1_.move1 = 201;
         _loc1_.numMoves = 1;
         _loc1_.moveSelected = 1;
         _loc1_.id = ++this.main.playerProfile.latestID;
         _loc1_.experience = 0;
         _loc1_.var_179 = _loc1_.level;
         _loc1_.var_175 = _loc1_.num;
         _loc1_.val = new this.profile_poke_val();
         _loc1_.saveInfo.needCaptured = true;
         _loc1_.saveInfo.extra = 168;
         _loc1_.shiny = 1;
         _loc1_.val.reset(_loc1_);
         if(_loc1_.name != "Omanyte")
         {
            return;
         }
         this.main.playerProfile.update_Pokedex(_loc1_);
         this.main.playerProfile.pokeList.push(_loc1_);
      
},"method_106":function(){
         this.main.playerProfile.addExtraInfo(34);
         var _loc1_ = new this.profile_poke();
         _loc1_.num = 142;
         this.finder_Poke_Info.get_Poke_Info(_loc1_);
         _loc1_.level = 1;
         _loc1_.move1 = 75;
         _loc1_.numMoves = 1;
         _loc1_.moveSelected = 1;
         _loc1_.id = ++this.main.playerProfile.latestID;
         _loc1_.experience = 0;
         _loc1_.var_179 = _loc1_.level;
         _loc1_.var_175 = _loc1_.num;
         _loc1_.val = new this.profile_poke_val();
         _loc1_.saveInfo.needCaptured = true;
         _loc1_.saveInfo.extra = 168;
         _loc1_.shiny = 1;
         _loc1_.val.reset(_loc1_);
         if(_loc1_.name != "Aerodactyl")
         {
            return;
         }
         this.main.playerProfile.update_Pokedex(_loc1_);
         this.main.playerProfile.pokeList.push(_loc1_);
      
},"get_Graphic":function(){
         return new this.movie_scene_Level_33_Win();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.end_Level();
      
}}},
"class_999":{parent:"popup",fields:{"var_3":function(){return null;},"var_602":function(){return null;}},imports:["Tween", "Regular", "MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "Tween", "movie_scene_Intro_4", "trainerEncounterSong", "viridianForestSong"],methods:{"class_999":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         if(this.var_3)
         {
            this.var_3.gfx_BG.x = -241;
            this.var_3.gfx_BG.y = -40;
            this.var_3.gfx_BG.visible = false;
            this.var_3.gfx_UI.visible = false;
         }
         if(this.main.playerProfile.lastLevelVisited < 4 && this.main.playerProfile.levelUnlocked < 4)
         {
            this.gfx.butt_skip.visible = false;
         }
      
},"method_324":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.viridianForestSong();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_262":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.trainerEncounterSong();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"run":function(param1 = null){
         if(this.gfx.currentLabel == "forest" || this.gfx.currentLabel == "forest1")
         {
            this.method_324();
         }
         else if(this.gfx.currentLabel == "encounter")
         {
            this.method_262();
         }
         else if(this.gfx.currentLabel == "pikachu" || this.gfx.currentLabel == "pikachu1")
         {
            this.method_5("025");
         }
         else if(this.gfx.currentLabel == "beedrill" || this.gfx.currentLabel == "beedrill1" || this.gfx.currentLabel == "beedrill2" || this.gfx.currentLabel == "beedrill3")
         {
            this.method_5("015");
         }
         else if(this.gfx.currentLabel == "camera_down")
         {
            this.var_602 = new this.Tween(this.gfx,"y",this.Regular.easeOut,this.gfx.y,-40,1,true);
            this.var_602.start();
         }
         else if(this.gfx.currentLabel == "camera_side")
         {
            this.var_602 = new this.Tween(this.gfx,"x",this.Regular.easeOut,this.gfx.x,-241,2,true);
            this.var_602.start();
         }
         return false;
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         if(Boolean(param1.target) && param1.target instanceof this.MovieClip)
         {
            _loc2_ = param1.target;
            if(!_loc2_)
            {
               return false;
            }
            if(_loc2_.name == "butt_next")
            {
               this.gfx.play();
               return true;
            }
            if(_loc2_.name == "butt_close" || _loc2_.name == "butt_skip")
            {
               this.remove_Me();
               return true;
            }
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_Intro_4();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_BG.visible = true;
         this.var_3.gfx_UI.visible = true;
         this.var_3.start_Level();
      
}}},
"popup_online_intro_1_0":{parent:"popup",fields:{"var_44":function(){return null;},"var_3":function(){return null;}},imports:["MovieClip", "MouseEvent", "SoundMixer"],constructors:["movie_scene_Online_Intro_1"],methods:{"popup_online_intro_1_0":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         if(this.var_3)
         {
            this.var_3.gfx_UI.visible = false;
         }
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_Online_Intro_1();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_UI.visible = true;
         this.var_3.start_Level();
      
}}},
"popup_online_intro_1_1":{parent:"popup",fields:{"var_44":function(){return null;},"var_3":function(){return null;}},imports:["MovieClip", "MouseEvent", "SoundMixer"],constructors:["movie_scene_Online_Attack_Intro_1"],methods:{"popup_online_intro_1_1":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         if(this.var_3)
         {
            this.var_3.gfx_UI.visible = false;
         }
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_Online_Attack_Intro_1();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_UI.visible = true;
         this.var_3.start_Level();
      
}}},
"popup_online_intro_2":{parent:"popup",fields:{"var_44":function(){return null;},"var_3":function(){return null;}},imports:["MovieClip", "Event", "MouseEvent"],constructors:["movie_scene_Online_2_intro"],methods:{"popup_online_intro_2":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
      
},"run":function(param1 = null){
         this.remove_Me();
         return false;
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_Online_2_intro();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.gfx_UI.visible = true;
         this.var_3.start_Level();
      
}}},
"popup_online_win_1_0":{parent:"popup",fields:{"var_44":function(){return null;},"var_3":function(){return null;}},imports:["MovieClip", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_Online_Win_1", "victory_gym_song"],methods:{"popup_online_win_1_0":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         this.var_3.levelPlaying = false;
         this.var_3.hit_Play();
         this.put_In_Spot();
      
},"put_In_Spot":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.victory_gym_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_Online_Win_1();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.end_Level();
      
}}},
"popup_online_win_1_1":{parent:"popup",fields:{"var_44":function(){return null;},"var_3":function(){return null;}},imports:["MovieClip", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_Online_Win_1", "victory_gym_song"],methods:{"popup_online_win_1_1":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         this.var_3.levelPlaying = false;
         this.var_3.hit_Play();
         this.put_In_Spot();
      
},"put_In_Spot":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.victory_gym_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_Online_Win_1();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.end_Level();
      
}}},
"popup_online_win_2":{parent:"popup",fields:{"var_44":function(){return null;},"var_3":function(){return null;}},imports:["MovieClip", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "movie_scene_Online_2_win", "victory_gym_song"],methods:{"popup_online_win_2":function(param1){
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.SoundMixer.stopAll();
         this.var_3.levelPlaying = false;
         this.var_3.hit_Play();
         this.put_In_Spot();
      
},"put_In_Spot":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.victory_gym_song();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"mouse_Down":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(_loc2_.name == "butt_end" || _loc2_.name == "butt_skip")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"get_Graphic":function(){
         return new this.movie_scene_Online_2_win();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.var_3.end_Level();
      
}}},
"popups_Check_Evolve":{parent:"popup",fields:{"var_303":function(){return null;},"var_3":function(){return null;},"var_170":function(){return 0;},"var_120":function(){return 0;}},imports:["DisplayObject", "MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "evolveDoneMusic", "evolveMusic", "focus_Evolve"],methods:{"popups_Check_Evolve":function(param1, param2){
         this.var_303 = param2;
         this.var_3 = param1;
         this.__baseConstructor(param1);
      
},"init":function(){
         var _loc3_ = null;
         this.__super.init();
         this.var_170 = this.var_303.myProfile.num;
         this.method_70();
         var _loc1_ = new this.evolveMusic();
         var _loc2_ = _loc1_.play(0,2);
         if(_loc2_)
         {
            _loc3_ = new this.SoundTransform(this.class_1.var_25);
            _loc2_.soundTransform = _loc3_;
         }
         this.gfx.actual.whoEvolve.text = this.var_303.myProfile.name + " is evolving!";
         this.var_3.pause_Level_Music();
      
},"method_70":function(){
         var _loc1_ = "";
         if(this.var_303.myProfile.shiny == 2)
         {
            _loc1_ = "ss";
         }
         else if(this.var_303.myProfile.shiny == 1)
         {
            _loc1_ = "s";
         }
         this.gfx.actual.gfx_poke.gotoAndStop(_loc1_ + this.var_170);
      
},"run":function(param1 = null){
         var _loc2_ = null;
         var _loc3_ = null;
         var _loc4_ = null;
         if(!this.gfx)
         {
            return false;
         }
         if(this.gfx.currentLabel == "end_evolve")
         {
            if(this.gfx.actual.currentLabel == "almost_done_evolving")
            {
               this.SoundMixer.stopAll();
               _loc2_ = new this.evolveDoneMusic();
               _loc3_ = _loc2_.play(0,2);
               _loc4_ = new this.SoundTransform(this.class_1.var_25);
               _loc3_.soundTransform = _loc4_;
               this.gfx.actual.whoEvolve2.text = this.var_303.myProfile.name + " evolved into ";
               this.var_303.evolve();
               this.gfx.actual.whoEvolve2.text += this.var_303.myProfile.name + "!";
               this.var_170 = this.var_303.myProfile.num;
               this.method_70();
            }
            else if(this.gfx.actual.currentLabel == "transforming")
            {
               if(this.var_120 == 3)
               {
                  if(this.var_303.myProfile.num == 133)
                  {
                     if(this.var_303.myProfile.whichStone == 5)
                     {
                        this.var_170 = 136;
                     }
                     else if(this.var_303.myProfile.whichStone == 4)
                     {
                        this.var_170 = 134;
                     }
                     else if(this.var_303.myProfile.whichStone == 3)
                     {
                        this.var_170 = 135;
                     }
                  }
                  else
                  {
                     ++this.var_170;
                  }
                  this.method_70();
               }
               else if(this.var_120 == 6)
               {
                  this.var_120 = 0;
                  if(this.var_170 == 135 || this.var_170 == 134 || this.var_170 == 136)
                  {
                     this.var_170 = 133;
                  }
                  else
                  {
                     --this.var_170;
                  }
                  this.method_70();
               }
               ++this.var_120;
            }
         }
         return false;
      
},"mouse_Down":function(param1 = null){
         if(!this.gfx)
         {
            return false;
         }
         if(this.gfx.currentLabel == "end_evolve")
         {
            if(this.gfx.actual.currentLabel == "done_evolving")
            {
               this.remove_Me();
            }
            else if(Boolean(param1.target) && param1.target instanceof this.DisplayObject && this.DisplayObject(param1.target).name == "stop_evolving_butt")
            {
               this.remove_Me();
            }
         }
         return false;
      
},"get_Graphic":function(){
         return new this.focus_Evolve();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.SoundMixer.stopAll();
         this.var_3.resume_Level_Music();
         this.var_3.reset_Poke();
         this.var_3.show_UI();
         this.var_3.hit_Play();
         this.var_3.check_Learn_Move(this.var_303);
      
}}},
"popups_Save_Account":{parent:"popup",fields:{"var_661":function(){return null;},"var_607":function(){return null;},"loader":function(){return null;},"var_727":function(){return false;}},imports:["MovieClip", "Event", "IOErrorEvent", "MouseEvent", "URLLoader", "URLRequest", "URLVariables"],constructors:["Date", "URLLoader", "URLRequest", "URLVariables", "popup_Save", "screen_Login", "screen_Main"],methods:{"popups_Save_Account":function(param1, param2 = "none", param3 = null){
         this.var_661 = param2;
         this.var_607 = param3;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         if(this.main.playerProfile.is_Legal())
         {
            this.gfx.actual.gotoAndStop(5);
            return;
         }
         this.method_174(this.main.playerProfile.save_Profile());
      
},"mouse_Down":function(param1 = null){
         var _loc2_ = null;
         if(this.gfx.currentLabel == "end")
         {
            if(this.gfx.actual.currentFrame == 3)
            {
               this.remove_Me();
               return true;
            }
            if(this.gfx.actual.currentFrame == 4 || this.gfx.actual.currentFrame == 5)
            {
               this.var_607 = new this.screen_Main(this.my_Parent.my_Parent);
               this.remove_Me();
               return true;
            }
            if(param1.target instanceof this.MovieClip)
            {
               _loc2_ = param1.target;
               if(!_loc2_)
               {
                  return false;
               }
               if(this.gfx.actual.yes_butt && this.gfx.actual.yes_butt.contains(_loc2_))
               {
                  this.gfx.actual.gotoAndStop(1);
                  this.method_174(this.main.playerProfile.save_Profile());
               }
               else if(this.gfx.actual.no_butt && this.gfx.actual.no_butt.contains(_loc2_))
               {
                  this.remove_Me();
               }
               return true;
            }
            return false;
         }
         return false;
      
},"get_Graphic":function(){
         return new this.popup_Save();
      
},"method_174":function(param1){
         var _loc2_ = new this.URLRequest();
         var _loc3_ = new this.Date();
         _loc2_.url = this.screen_Login.getServerURL() + "?Date=" + _loc3_.getTime();
         var _loc4_ = new this.URLVariables();
         _loc4_.Action = "saveAccount";
         _loc4_.Email = this.main.playerProfile.email;
         _loc4_.Pass = this.main.playerProfile.pass;
         _loc4_.ver = 360;
         _loc4_.saveString = param1;
         _loc2_.method = "POST";
         _loc2_.data = _loc4_;
         this.loader = new this.URLLoader();
         this.loader.dataFormat = "text";
         this.loader.addEventListener("complete",this.received_Response);
         this.loader.addEventListener("ioError",this.no_Internet);
         this.loader.load(_loc2_);
      
},"no_Internet":function(param1){
         this.loader.removeEventListener("complete",this.received_Response);
         this.loader.removeEventListener("ioError",this.no_Internet);
         this.loader = null;
         this.gfx.actual.gotoAndStop(2);
      
},"received_Response":function(param1){
         var _loc2_ = null;
         this.loader.removeEventListener("complete",this.received_Response);
         this.loader.removeEventListener("ioError",this.no_Internet);
         try
         {
            _loc2_ = new this.URLVariables(param1.target.data);
            this.loader = null;
         }
         catch(e)
         {
            this.gfx.actual.gotoAndStop(2);
            return;
         }
         if(_loc2_.Result == "Failure")
         {
            if(_loc2_.Reason == "Validation")
            {
               this.gfx.actual.gotoAndStop(4);
               return;
            }
            if(_loc2_.Reason == "hacking")
            {
               this.gfx.actual.gotoAndStop(5);
               return;
            }
            this.gfx.actual.gotoAndStop(2);
         }
         else if(_loc2_.Result == "Success")
         {
            this.main.playerProfile.accountData.CurrentSave = _loc2_.newSave;
            this.main.playerProfile.method_192(_loc2_);
            this.main.playerProfile.reset_Poke_Save_Needs();
            this.main.playerProfile.isNewGame = false;
            this.gfx.actual.gotoAndStop(3);
         }
      
},"remove_Me":function(){
         var _loc1_ = null;
         this.__super.remove_Me();
         if(this.var_661 != "none")
         {
            if(this.var_661 == "profilePage")
            {
               _loc1_ = new this.screen_Login(this.my_Parent);
            }
         }
         else if(this.var_607)
         {
            _loc1_ = this.var_607;
         }
         if(_loc1_)
         {
            this.send_Msg(["change_Screen",_loc1_]);
         }
      
}}},
"popups_Tutorial_party":{parent:"_obj",fields:{"gfx_BG":function(){return null;},"whichPoke":function(){return 0;},"var_662":function(){return 0;},"var_602":function(){return null;}},imports:["Tween", "TweenEvent", "Regular", "MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform", "getDefinitionByName"],constructors:["SoundTransform", "Tween", "_loc2_", "movie_scene_tutorial_1", "oak_lab", "profile_poke", "profile_poke_val", "screen_Chapters", "superEffectiveSound", "team_rocket_music"],methods:{"popups_Tutorial_party":function(param1){
         this.__baseConstructor(param1);
         this.init();
      
},"method_165":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.oak_lab();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_263":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.team_rocket_music();
         var _loc2_ = _loc1_.play(0,10);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_5":function(param1){
         var _loc5_ = "cry_" + param1;
         var _loc2_ = this.getDefinitionByName(_loc5_);
         var _loc3_ = new _loc2_();
         var _loc6_ = _loc3_.play(0,1);
         var _loc4_ = new this.SoundTransform(this.class_1.var_194);
         _loc6_.soundTransform = _loc4_;
      
},"init":function(){
         this.gfx_BG = new this.movie_scene_tutorial_1();
         this.addChild(this.gfx_BG);
         this.method_165();
      
},"run":function(param1 = null){
         if(this.gfx_BG.currentLabel == "volt_show")
         {
            this.method_5("100");
         }
         return false;
      
},"mouse_Up":function(param1 = null){
         if(!param1.target || !param1.target instanceof this.MovieClip)
         {
            return false;
         }
         var _loc2_ = param1.target;
         if(!_loc2_)
         {
            return false;
         }
         if(_loc2_.name == "butt_next")
         {
            if(this.gfx_BG.currentLabel == "before_explosion")
            {
               this.method_280();
            }
            else if(this.gfx_BG.currentLabel == "ready_To_Tween")
            {
               this.method_385(null);
            }
            else
            {
               if(this.gfx_BG.currentLabel == "last_screen")
               {
                  this.method_225();
                  return true;
               }
               if(this.gfx_BG.currentLabel == "done_choosing")
               {
                  this.method_263();
               }
               else if(this.gfx_BG.currentLabel == "drowsee_next")
               {
                  this.method_5("096");
               }
               else if(this.gfx_BG.currentLabel == "show_drowsee")
               {
                  this.method_5("097");
               }
               else if(this.gfx_BG.currentLabel == "volt_done")
               {
                  this.method_165();
               }
            }
            this.gfx_BG.play();
         }
         else if(_loc2_.name == "butt_yes")
         {
            if(this.gfx_BG.currentLabel == "choose_red")
            {
               this.var_662 = 1;
               this.gfx_BG.gotoAndStop("before_explosion");
               return true;
            }
            if(this.gfx_BG.currentLabel == "choose_blue")
            {
               this.var_662 = 2;
               this.gfx_BG.gotoAndStop("before_explosion");
               return true;
            }
            this.gfx_BG.gotoAndStop("done_choosing");
         }
         else if(_loc2_.name == "butt_no")
         {
            if(this.gfx_BG.currentLabel == "choose_red" || this.gfx_BG.currentLabel == "choose_blue")
            {
               this.gfx_BG.gotoAndStop("choose_version");
               return true;
            }
            this.gfx_BG.gotoAndStop("choose_pokemon");
         }
         else if(_loc2_.name == "butt_bulbasaur")
         {
            this.whichPoke = 1;
            this.gfx_BG.gotoAndStop("choose_bulbasaur");
         }
         else if(_loc2_.name == "butt_charmander")
         {
            this.whichPoke = 4;
            this.gfx_BG.gotoAndStop("choose_charmander");
         }
         else if(_loc2_.name == "butt_squirtle")
         {
            this.whichPoke = 7;
            this.gfx_BG.gotoAndStop("choose_squirtle");
         }
         else if(_loc2_.name == "butt_red")
         {
            this.gfx_BG.gotoAndStop("choose_red");
         }
         else if(_loc2_.name == "butt_blue")
         {
            this.gfx_BG.gotoAndStop("choose_blue");
         }
         return false;
      
},"method_225":function(){
         this.main.playerProfile.currentVersion = this.var_662;
         var _loc1_ = new this.profile_poke();
         _loc1_.num = this.whichPoke;
         _loc1_.level = 5;
         _loc1_.numMoves = 2;
         if(this.whichPoke == 1)
         {
            _loc1_.move1 = 1;
            _loc1_.move2 = 5;
         }
         else if(this.whichPoke == 4)
         {
            _loc1_.move1 = 6;
            _loc1_.move2 = 5;
         }
         else if(this.whichPoke == 7)
         {
            _loc1_.move1 = 1;
            _loc1_.move2 = 3;
         }
         _loc1_.experience = 0;
         _loc1_.moveSelected = 1;
         _loc1_.var_179 = _loc1_.level;
         _loc1_.var_175 = _loc1_.num;
         _loc1_.id = ++this.main.playerProfile.latestID;
         _loc1_.val = new this.profile_poke_val();
         _loc1_.val.reset(_loc1_);
         this.finder_Poke_Info.get_Poke_Info(_loc1_);
         _loc1_.saveInfo.needCaptured = true;
         if(_loc1_.name != "Bulbasaur" && _loc1_.name != "Charmander" && _loc1_.name != "Squirtle")
         {
            return;
         }
         this.main.playerProfile.update_Pokedex(_loc1_);
         this.main.playerProfile.pokeList.push(_loc1_);
         this.send_Msg(["change_Screen",new this.screen_Chapters(this.my_Parent)]);
      
},"method_280":function(){
         this.SoundMixer.stopAll();
         var _loc1_ = new this.superEffectiveSound();
         _loc1_.play();
         this.var_602 = new this.Tween(this.gfx_BG,"y",this.Regular.easeOut,this.gfx_BG.y,this.gfx_BG.y,2,true);
         this.var_602.start();
      
},"method_385":function(param1){
         this.var_602 = new this.Tween(this.gfx_BG,"y",this.Regular.easeOut,this.gfx_BG.y,-200,4,true);
         this.var_602.start();
      
}}}};
