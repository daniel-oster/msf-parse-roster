import { Component } from '@angular/core';
import {saveAs} from 'file-saver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  map = [];
  constructor() {
    this.map['A.I.M. Assaulter'] = 'AimDmg_Speed';
    this.map['A.I.M. Infector'] = 'AimControl_Infect';
    this.map['A.I.M. Monstrosity'] = 'AimDmg_Offense';
    this.map['A.I.M. Researcher'] = 'AimSupport_Heal';
    this.map['A.I.M. Security'] = 'AimTank_Taunt';
    this.map['Agent Coulson'] = 'Coulson';
    this.map['America Chavez'] = 'AmericaChavez';
    this.map['Ant-Man'] = 'AntMan';
    this.map['Black Bolt'] = 'BlackBolt';
    this.map['Black Panther'] = 'BlackPanther';
    this.map['Black Widow'] = 'BlackWidow';
    this.map['Blob'] = 'Blob';
    this.map['Bullseye'] = 'Bullseye';
    this.map['Cable'] = 'Cable';
    this.map['Captain America'] = 'CaptainAmerica';
    this.map['Captain Marvel'] = 'CaptainMarvel';
    this.map['Carnage'] = 'Carnage';
    this.map['Colossus'] = 'Colossus';
    this.map['Corvus Glaive'] = 'CorvusGlaive';
    this.map['Crossbones'] = 'Crossbones';
    this.map['Crystal'] = 'Crystal';
    this.map['Cull Obsidian'] = 'CullObsidian';
    this.map['Cyclops'] = 'Cyclops';
    this.map['Daredevil'] = 'Daredevil';
    this.map['Deadpool'] = 'Deadpool';
    this.map['Doctor Strange'] = 'DoctorStrange';
    this.map['Drax'] = 'Drax';
    this.map['Elektra'] = 'Elektra';
    this.map['Elsa Bloodstone'] = 'ElsaBloodstone';
    this.map['Falcon'] = 'Falcon';
    this.map['Gamora'] = 'Gamora';
    this.map['Ghost Rider'] = 'GhostRider';
    this.map['Graviton'] = 'Graviton';
    this.map['Green Goblin'] = 'UltGreenGoblin';
    this.map['Groot'] = 'Groot';
    this.map['Hand Archer'] = 'HandDmg_Unbuff';
    this.map['Hand Assassin'] = 'HandControl_HealBlock';
    this.map['Hand Blademaster'] = 'HandDmg_Bonus';
    this.map['Hand Sentry'] = 'HandTank_Stealth';
    this.map['Hand Sorceress'] = 'HandSupport_Heal';
    this.map['Hawkeye'] = 'Hawkeye';
    this.map['Heimdall'] = 'Heimdall';
    this.map['Hela'] = 'Hela';
    this.map['Hulk'] = 'Hulk';
    this.map['Human Torch'] = 'HumanTorch';
    this.map['Hydra Armored Guard'] = 'HydraTank_Taunt';
    this.map['Hydra Grenadier'] = 'HydraDmg_AoE';
    this.map['Hydra Rifle Trooper'] = 'HydraDmg_Buff';
    this.map['Hydra Scientist'] = 'HydraSupport_Heal';
    this.map['Hydra Sniper'] = 'HydraDmg_Single';
    this.map['Invisible Woman'] = 'InvisibleWoman';
    this.map['Iron Fist'] = 'IronFist';
    this.map['Iron Man'] = 'IronMan';
    this.map['Ironheart'] = 'Ironheart';
    this.map['Jessica Jones'] = 'JessicaJones';
    this.map['Juggernaut'] = 'Juggernaut';
    this.map['Karnak'] = 'Karnak';
    this.map['Killmonger'] = 'Killmonger';
    this.map['Kingpin'] = 'Kingpin';
    this.map['Korath the Pursuer'] = 'Korath';
    this.map['Kree Cyborg'] = 'KreeDmg_Offense';
    this.map['Kree Noble'] = 'KreeControl_Assist';
    this.map['Kree Oracle'] = 'KreeSupport_HoT';
    this.map['Kree Reaper'] = 'KreeDmg_Speed';
    this.map['Kree Royal Guard'] = 'KreeTank_Counter';
    this.map['Loki'] = 'Loki';
    this.map['Luke Cage'] = 'LukeCage';
    this.map['M\'Baku'] = 'MBaku';
    this.map['Magneto'] = 'Magneto';
    this.map['Mantis'] = 'Mantis';
    this.map['Mercenary Lieutenant'] = 'MercSupport_Buffs';
    this.map['Mercenary Riot Guard'] = 'MercTank_Debuff';
    this.map['Mercenary Sniper'] = 'MercDmg_Single';
    this.map['Mercenary Soldier'] = 'MercDmg_General';
    this.map['Minn-Erva'] = 'Minerva';
    this.map['Mister Fantastic'] = 'MrFantastic';
    this.map['Mister Sinister'] = 'MrSinister';
    this.map['Mordo'] = 'BaronMordo';
    this.map['Ms. Marvel'] = 'MsMarvel';
    this.map['Mysterio'] = 'Mysterio';
    this.map['Mystique'] = 'Mystique';
    this.map['Namor'] = 'Namor';
    this.map['Nebula'] = 'Nebula';
    this.map['Nick Fury'] = 'NickFury';
    this.map['Night Nurse'] = 'NightNurse';
    this.map['Nobu'] = 'Nobu';
    this.map['Okoye'] = 'Okoye';
    this.map['Phoenix'] = 'Phoenix';
    this.map['Proxima Midnight'] = 'ProximaMidnight';
    this.map['Psylocke'] = 'Psylocke';
    this.map['Punisher'] = 'Punisher';
    this.map['Pyro'] = 'Pyro';
    this.map['Quake'] = 'Quake';
    this.map['Ravager Boomer'] = 'RavagerDmg_AoE';
    this.map['Ravager Bruiser'] = 'RavagerTank_Taunt';
    this.map['Ravager Stitcher'] = 'RavagerSupport_Heal';
    this.map['Red Skull'] = 'RedSkull';
    this.map['Rescue'] = 'Rescue';
    this.map['Rhino'] = 'Rhino';
    this.map['Rocket Raccoon'] = 'RocketRaccoon';
    this.map['Ronan the Accuser'] = 'Ronan';
    this.map['S.H.I.E.L.D. Assault'] = 'ShieldDmg_AoE';
    this.map['S.H.I.E.L.D. Medic'] = 'ShieldSupport_Heal';
    this.map['S.H.I.E.L.D. Operative'] = 'ShieldSupport_Stealth';
    this.map['S.H.I.E.L.D. Security'] = 'ShieldTank_Stun';
    this.map['S.H.I.E.L.D. Trooper'] = 'ShieldDmg_Defense';
    this.map['Sabretooth'] = 'Sabretooth';
    this.map['Scarlet Witch'] = 'ScarletWitch';
    this.map['Scientist Supreme'] = 'ScientistSupreme';
    this.map['Shocker'] = 'Shocker';
    this.map['Shuri'] = 'Shuri';
    this.map['Sif'] = 'Sif';
    this.map['Spider-Man'] = 'SpiderMan';
    this.map['Spider-Man (Miles)'] = 'UltSpiderMan';
    this.map['Spider-Man (Symbiote)'] = 'SymbioteSpiderMan';
    this.map['Star-Lord'] = 'StarLord';
    this.map['Storm'] = 'Storm';
    this.map['Stryfe'] = 'Stryfe';
    this.map['Thanos'] = 'Thanos';
    this.map['The Thing'] = 'Thing';
    this.map['Thor'] = 'Thor';
    this.map['Toad'] = 'Toad';
    this.map['Ultimus'] = 'Ultimus';
    this.map['Ultron'] = 'Ultron';
    this.map['Venom'] = 'Venom';
    this.map['Vision'] = 'Vision';
    this.map['Vulture'] = 'Vulture';
    this.map['War Machine'] = 'WarMachine';
    this.map['Wasp'] = 'Wasp';
    this.map['Winter Soldier'] = 'WinterSoldier';
    this.map['Wolverine'] = 'Wolverine';
    this.map['Yo-Yo'] = 'YoYo';
    this.map['Yondu'] = 'Yondu';


  }
  parse(val:string) {

    var rows = val.split('\n');
    var data = ['id,name,power,level,gearTier,stars,redStars'];
    this.map;
    rows.forEach(v => {
      let from = v.indexOf('\'s ');
      var piece = v.substr(from + 3)
      let endOfName = piece.indexOf(':');
      var name = piece.substring(0, endOfName);
      var id = this.map[name];
      var cols = piece.substr(endOfName).split(' ');
      var level = cols[1].replace(/\*/g, '');
      var power = cols[3].replace(/\*|\.|k/g, '') + "00";
      var ys = cols[5].substring(0, cols[5].indexOf(':'));
      var rs = cols[6].replace(/R|S/g, '');
      var gearTier = cols[7].replace(/G/, '');
      //alert(piece);

      var indexOfDot = gearTier.indexOf('.');
      if(indexOfDot > 0) {
        gearTier = gearTier.substring(0, indexOfDot);
      }

      data.push(id + ',' + name + ',' +power+ ',' +level+ ',' +gearTier+ ',' +ys+ ',' + rs);

    });
    var blob = new Blob([data.join('\n')], {type: "text/csv;charset=utf-8"});
    saveAs(blob, "roster.csv");

  }
}
