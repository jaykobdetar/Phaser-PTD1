/* Mechanically translated recovered popup controllers. Original branching and reward code retained. */
export const PROFILE_CONTROLLERS={"popups_Evolve":{parent:"popup",fields:{"var_165":function(){return this.my_Parent;},"var_111":function(){return null;},"var_170":function(){return 0;},"var_120":function(){return 0;}},imports:["DisplayObject", "MovieClip", "Event", "MouseEvent", "Sound", "SoundChannel", "SoundMixer", "SoundTransform"],constructors:["SoundTransform", "evolveDoneMusic", "evolveMusic", "focus_Evolve"],methods:{"popups_Evolve":function(param1, param2){
         this.var_111 = param2;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.var_170 = this.var_111.num;
         this.method_70();
         this.gfx.actual.whoEvolve.text = this.var_111.name + " is evolving!";
         var _loc1_ = new this.evolveMusic();
         var _loc2_ = _loc1_.play(0,2);
         var _loc3_ = new this.SoundTransform(this.class_1.var_25);
         _loc2_.soundTransform = _loc3_;
      
},"method_70":function(){
         var _loc1_ = "";
         if(this.var_111.shiny == 2)
         {
            _loc1_ = "ss";
         }
         else if(this.var_111.shiny == 1)
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
               this.gfx.actual.whoEvolve2.text = this.var_111.name + " evolved into ";
               this.var_111.evolve();
               this.gfx.actual.whoEvolve2.text += this.var_111.name + "!";
               this.var_170 = this.var_111.num;
               this.method_70();
            }
            else if(this.gfx.actual.currentLabel == "transforming")
            {
               if(this.var_120 == 3)
               {
                  if(this.var_111.num == 133)
                  {
                     if(this.var_111.whichStone == 5)
                     {
                        this.var_170 = 136;
                     }
                     else if(this.var_111.whichStone == 4)
                     {
                        this.var_170 = 134;
                     }
                     else if(this.var_111.whichStone == 3)
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
         this.SoundMixer.stopAll();
         this.__super.remove_Me();
         this.var_165.check_New_Move();
      
}}},
"popups_Items":{parent:"popup",fields:{"var_165":function(){return this.my_Parent;},"pokeProfile":function(){return null;},"ITEM_NAMES":function(){return ["","Moon Stone","Leaf Stone","Thunder Stone","Water Stone","Fire Stone"];},"POKEMON_EVOLUTIONS":function(){return {
         1:[30,33,39,35],
         2:[70,44,102],
         3:[25,133],
         4:[61,120,133,90],
         5:[58,37,133]
      };}},imports:["MovieClip", "MouseEvent"],constructors:["popup_item", "popups_Evolve"],methods:{"popups_Items":function(param1, param2){
         this.pokeProfile = param2;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.setupDisplay();
      
},"setupDisplay":function(){
         var _loc3_ = 0;
         var _loc2_ = Math.trunc(0);
         var _loc4_ = null;
         var _loc1_ = Math.trunc(1);
         _loc3_ = 1;
         while(_loc3_ <= 5)
         {
            if(this.isItemCompatibleWithPokemon(_loc3_))
            {
               _loc2_ = Math.trunc(this.main.playerProfile.getItemValue(_loc3_));
               if(_loc2_ != 0)
               {
                  if(_loc1_ > 4)
                  {
                     break;
                  }
                  _loc4_ = this.gfx.actual["item_" + _loc1_];
                  _loc4_.item_name.text = this.ITEM_NAMES[_loc3_] + " x" + _loc2_;
                  _loc4_.use_butt.visible = true;
                  _loc4_["itemID"] = _loc3_;
                  _loc1_++;
               }
            }
            _loc3_++;
         }
         if(_loc1_ == 1)
         {
            this.gfx.actual.item_1.item_name.text = "No usable items.";
            this.gfx.actual.item_1.use_butt.visible = false;
            _loc1_++;
         }
         _loc3_ = _loc1_;
         while(_loc3_ <= 4)
         {
            this.gfx.actual["item_" + _loc3_].item_name.text = "";
            this.gfx.actual["item_" + _loc3_].use_butt.visible = false;
            _loc3_++;
         }
      
},"isItemCompatibleWithPokemon":function(param1){
         return this.POKEMON_EVOLUTIONS[param1].indexOf(this.pokeProfile.num) > -1;
      
},"triggerEvolutionPopup":function(){
         this.remove_Me();
         this.var_165.add_Popup(new this.popups_Evolve(this.var_165,this.pokeProfile));
      
},"mouse_Down":function(param1 = null){
         var _loc3_ = null;
         var _loc2_ = Math.trunc(0);
         if(this.gfx.currentLabel == "end" && param1.target && param1.target instanceof this.MovieClip)
         {
            _loc3_ = param1.target;
            if(!_loc3_)
            {
               return false;
            }
            if(_loc3_.name == "done_butt")
            {
               this.remove_Me();
            }
            else if(_loc3_.name == "use_butt")
            {
               _loc2_ = Math.trunc(Math.trunc(_loc3_.parent["itemID"]));
               this.main.playerProfile.useItem(_loc2_);
               this.pokeProfile.whichStone = _loc2_;
               this.triggerEvolutionPopup();
            }
         }
         return false;
      
},"get_Graphic":function(){
         return new this.popup_item();
      
}}},
"popups_Learned_New_Move":{parent:"popup",fields:{"var_165":function(){return this.my_Parent;},"var_111":function(){return null;},"var_362":function(){return null;}},imports:["MovieClip", "MouseEvent", "SoundMixer"],constructors:["focus_New_Move"],methods:{"popups_Learned_New_Move":function(param1, param2, param3){
         this.var_111 = param2;
         this.var_362 = param3;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         var _loc1_ = "";
         if(this.var_111.shiny == 2)
         {
            _loc1_ = "ss";
         }
         else if(this.var_111.shiny == 1)
         {
            _loc1_ = "s";
         }
         this.gfx.actual.gfx_poke.gotoAndStop(_loc1_ + this.var_111.num);
         this.gfx.actual.moveText.text = this.var_111.name + " learned " + this.var_362 + "!";
      
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
         this.var_165.set_Profile();
         this.SoundMixer.stopAll();
      
}}},
"popups_Relearn":{parent:"popup",fields:{"var_165":function(){return this.my_Parent;},"pokeProfile":function(){return null;},"moves":function(){return null;},"currentMove":function(){return 0;}},imports:["MovieClip", "MouseEvent"],constructors:["popup_relearn"],methods:{"popups_Relearn":function(param1, param2){
         this.pokeProfile = param2;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.set_Moves();
      
},"set_Moves":function(){
         var _loc3_ = Math.trunc(0);
         var _loc8_ = Math.trunc(0);
         var _loc5_ = Math.trunc(0);
         var _loc1_ = null;
         var _loc4_ = this.finder_Poke_Moves.relearn_Moves(this.pokeProfile);
         var _loc7_ = [];
         var _loc6_ = Math.trunc(Math.trunc(_loc4_.length));
         _loc3_ = Math.trunc(0);
         while(_loc3_ < _loc6_)
         {
            _loc8_ = Math.trunc(Math.trunc(_loc4_[_loc3_]));
            if(!this.finder_Poke_Moves.check_If_Pokemon_Has_Move(_loc8_,this.pokeProfile))
            {
               _loc7_.push(_loc8_);
            }
            _loc3_++;
         }
         this.moves = _loc7_;
         _loc5_ = Math.trunc(0);
         while(_loc5_ < 20)
         {
            _loc1_ = this.gfx.actual["attack_" + (_loc5_ + 1)];
            if(_loc5_ < this.moves.length)
            {
               _loc1_.visible = true;
               _loc1_.attack_name.gotoAndStop(this.moves[_loc5_]);
            }
            else
            {
               _loc1_.visible = false;
            }
            _loc5_++;
         }
         var _loc2_ = this.moves.length > 0;
         if(_loc2_)
         {
            this.change_Move(this.moves[0]);
         }
         this.gfx.actual.attack_name.visible = _loc2_;
         this.gfx.actual.attack_description.visible = _loc2_;
         this.gfx.actual.relearn_butt.visible = _loc2_;
      
},"change_Move":function(param1){
         this.gfx.actual.attack_name.gotoAndStop(param1);
         this.gfx.actual.attack_description.gotoAndStop(param1);
         this.currentMove = param1;
      
},"relearn_Move":function(){
         this.main.playerProfile.money -= 1000;
         this.main.playerProfile.save_Profile();
         this.remove_Me();
         this.var_165.check_New_Move(this.currentMove);
      
},"mouse_Down":function(param1 = null){
         var _loc4_ = Math.trunc(0);
         var _loc3_ = null;
         var _loc2_ = null;
         if(this.gfx.currentLabel == "end")
         {
            if(param1.target && param1.target instanceof this.MovieClip)
            {
               _loc2_ = this.MovieClip(param1.target);
               if(!_loc2_)
               {
                  return false;
               }
               if(_loc2_.name == "done_butt")
               {
                  this.remove_Me();
                  return true;
               }
               if(_loc2_.name == "relearn_butt")
               {
                  this.relearn_Move();
                  return true;
               }
               _loc4_ = Math.trunc(1);
               while(_loc4_ <= 20)
               {
                  _loc3_ = this.gfx.actual["attack_" + _loc4_];
                  if(_loc3_ && _loc3_.contains(_loc2_))
                  {
                     this.change_Move(this.moves[_loc4_ - 1]);
                     return true;
                  }
                  _loc4_++;
               }
            }
         }
         return false;
      
},"get_Graphic":function(){
         return new this.popup_relearn();
      
}}},
"popups_Release_Poke":{parent:"popup",fields:{"var_165":function(){return this.my_Parent;},"var_111":function(){return null;}},imports:["MovieClip", "MouseEvent"],constructors:["popup_Release_Poke"],methods:{"popups_Release_Poke":function(param1, param2){
         this.var_111 = param2;
         this.__baseConstructor(param1);
      
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
            this.method_195();
            this.remove_Me();
            this.var_165.back_Pressed();
            return true;
         }
         if(_loc2_.name == "butt_no")
         {
            this.remove_Me();
            return true;
         }
         return false;
      
},"method_195":function(){
         var _loc2_ = null;
         if(!this.main.playerProfile.releaseList)
         {
            this.main.playerProfile.releaseList = [];
         }
         this.main.playerProfile.releaseList.push(this.var_111.myID);
         var _loc1_ = Math.trunc(Math.trunc(this.main.playerProfile.pokeList.indexOf(this.var_111)));
         if(_loc1_ != -1)
         {
            this.main.playerProfile.pokeList.splice(_loc1_,1);
         }
         _loc1_ = Math.trunc(Math.trunc(this.main.playerProfile.partyList.indexOf(this.var_111)));
         if(_loc1_ != -1)
         {
            this.main.playerProfile.partyList[_loc1_] = null;
         }
         _loc1_ = Math.trunc(0);
         while(_loc1_ < this.main.playerProfile.pokeList.length)
         {
            _loc2_ = this.main.playerProfile.pokeList[_loc1_];
            _loc2_.saveInfo.posChange = true;
            _loc1_++;
         }
      
},"get_Graphic":function(){
         return new this.popup_Release_Poke();
      
}}},
"popups_Replace_Move":{parent:"popup",fields:{"var_165":function(){return this.my_Parent;},"var_215":function(){return 0;},"pokeProfile":function(){return null;}},imports:["DisplayObject", "MovieClip", "MouseEvent", "SoundMixer"],constructors:["focus_Replace_Move"],methods:{"popups_Replace_Move":function(param1, param2, param3){
         this.var_215 = param3;
         this.pokeProfile = param2;
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
            if(param1.target instanceof this.DisplayObject)
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
         this.pokeProfile["move" + param1] = this.var_215;
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
         this.var_165.set_Profile();
         this.SoundMixer.stopAll();
      
}}},
"popups_TM":{parent:"popup",fields:{"var_165":function(){return this.my_Parent;},"pokeProfile":function(){return null;},"moves":function(){return null;},"currentMove":function(){return 0;},"currentPage":function(){return 0;},"TM_LEVEL_REQUIREMENTS":function(){return {
         207:5,
         193:25,
         310:25,
         425:36,
         426:36,
         427:36
      };}},imports:["MovieClip", "MouseEvent"],constructors:["popup_tm"],methods:{"popups_TM":function(param1, param2){
         this.pokeProfile = param2;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         this.currentPage = 1;
         this.set_Moves();
      
},"set_Moves":function(){
         var _loc3_ = Math.trunc(0);
         var _loc13_ = Math.trunc(0);
         var _loc12_ = false;
         var _loc8_ = null;
         var _loc10_ = Math.trunc(0);
         var _loc2_ = this.finder_Poke_Moves.get_TMList(this.pokeProfile);
         var _loc5_ = [];
         var _loc1_ = Math.trunc(this.main.playerProfile.levelUnlocked);
         var _loc9_ = this.main.playerProfile.haveFlash == 1;
         _loc3_ = Math.trunc(0);
         while(_loc3_ < _loc2_.length)
         {
            _loc13_ = Math.trunc(Math.trunc(_loc2_[_loc3_]));
            _loc12_ = true;
            if(_loc1_ < 16 && _loc13_ == 224)
            {
               _loc12_ = false;
            }
            else if(!_loc9_ && _loc13_ == 225)
            {
               _loc12_ = false;
            }
            else if(this.finder_Poke_Moves.check_If_Pokemon_Has_Move(_loc13_,this.pokeProfile))
            {
               _loc12_ = false;
            }
            else if(this.TM_LEVEL_REQUIREMENTS[_loc13_] && _loc1_ < this.TM_LEVEL_REQUIREMENTS[_loc13_])
            {
               _loc12_ = false;
            }
            if(_loc12_)
            {
               _loc5_.push(_loc13_);
            }
            _loc3_++;
         }
         this.moves = _loc5_;
         var _loc4_ = Math.trunc(Math.trunc(this.moves.length));
         var _loc6_ = _loc4_ > 20;
         this.gfx.actual.arrow_left.visible = _loc6_ && this.currentPage > 1;
         this.gfx.actual.arrow_right.visible = _loc6_ && this.currentPage * 20 < _loc4_;
         var _loc7_ = Math.trunc((this.currentPage - 1) * 20);
         _loc3_ = Math.trunc(0);
         while(_loc3_ < 20)
         {
            _loc8_ = this.gfx.actual["attack_" + (_loc3_ + 1)];
            _loc10_ = Math.trunc(_loc7_ + _loc3_);
            if(_loc10_ < _loc4_)
            {
               _loc8_.visible = true;
               _loc8_.attack_name.gotoAndStop(this.moves[_loc10_]);
            }
            else
            {
               _loc8_.visible = false;
            }
            _loc3_++;
         }
         var _loc11_ = _loc4_ > 0;
         if(_loc11_)
         {
            this.change_Move(this.moves[_loc7_]);
         }
         this.gfx.actual.attack_name.visible = _loc11_;
         this.gfx.actual.attack_description.visible = _loc11_;
         this.gfx.actual.relearn_butt.visible = _loc11_;
      
},"change_Move":function(param1){
         this.gfx.actual.attack_name.gotoAndStop(param1);
         this.gfx.actual.attack_description.gotoAndStop(param1);
         this.currentMove = param1;
      
},"relearn_Move":function(){
         this.main.playerProfile.money -= 10000;
         this.main.playerProfile.save_Profile();
         this.remove_Me();
         this.var_165.check_New_Move(this.currentMove);
      
},"mouse_Down":function(param1 = null){
         var _loc3_ = Math.trunc(0);
         var _loc5_ = null;
         var _loc2_ = null;
         var _loc4_ = Math.trunc(0);
         if(this.gfx.currentLabel == "end")
         {
            if(Boolean(param1.target) && param1.target instanceof this.MovieClip)
            {
               _loc5_ = this.MovieClip(param1.target);
               if(!_loc5_)
               {
                  return false;
               }
               if(_loc5_.name == "done_butt")
               {
                  this.remove_Me();
                  return true;
               }
               if(_loc5_.name == "relearn_butt")
               {
                  this.relearn_Move();
                  return true;
               }
               if(Boolean(this.gfx.actual.arrow_right.visible) && Boolean(this.gfx.actual.butt_right.contains(_loc5_)))
               {
                  ++this.currentPage;
                  this.set_Moves();
                  return true;
               }
               if(Boolean(this.gfx.actual.arrow_left.visible) && Boolean(this.gfx.actual.butt_left.contains(_loc5_)))
               {
                  --this.currentPage;
                  this.set_Moves();
                  return true;
               }
               _loc3_ = Math.trunc(1);
               while(_loc3_ <= 20)
               {
                  _loc2_ = this.gfx.actual["attack_" + _loc3_];
                  if(_loc2_ && _loc2_.contains(_loc5_) && _loc2_.visible)
                  {
                     _loc4_ = Math.trunc((this.currentPage - 1) * 20 + (_loc3_ - 1));
                     this.change_Move(this.moves[_loc4_]);
                     return true;
                  }
                  _loc3_++;
               }
            }
         }
         return false;
      
},"get_Graphic":function(){
         return new this.popup_tm();
      
}}},
"popups_Trying_New_Move":{parent:"popup",fields:{"var_165":function(){return this.my_Parent;},"var_111":function(){return null;},"var_362":function(){return null;},"var_215":function(){return 0;}},imports:["DisplayObject", "MovieClip", "MouseEvent", "SoundMixer"],constructors:["focus_Trying_New_Move"],methods:{"popups_Trying_New_Move":function(param1, param2, param3, param4){
         this.var_111 = param2;
         this.var_362 = param3;
         this.var_215 = param4;
         this.__baseConstructor(param1);
      
},"init":function(){
         this.__super.init();
         var _loc1_ = "";
         if(this.var_111.shiny == 2)
         {
            _loc1_ = "ss";
         }
         else if(this.var_111.shiny == 1)
         {
            _loc1_ = "s";
         }
         this.gfx.actual.gfx_poke.gotoAndStop(_loc1_ + this.var_111.num);
         this.gfx.actual.moveText.text = this.var_111.name + " is trying to learn " + this.var_362 + ".";
      
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
                  this.var_165.set_Profile();
                  this.remove_Me();
               }
               else if(_loc2_.name == "learn_butt")
               {
                  this.remove_Me();
                  this.var_165.show_Replace_Move(this.var_215);
               }
            }
         }
         return false;
      
},"get_Graphic":function(){
         return new this.focus_Trying_New_Move();
      
},"remove_Me":function(){
         this.__super.remove_Me();
         this.SoundMixer.stopAll();
      
}}}};
