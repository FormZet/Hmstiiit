import React, { Component } from 'react';
import Navbar from './components/navbar/navbar.jsx';
import ModalPage from './components/Modal-page/modal-page.jsx';
import HeroList from './components/Hero-List/hero-list.jsx';
import HeroPics from './components/Hero-Pics/hero-pics.jsx';
import AddHero from './components/Add-Hero/add-hero.jsx';
import {Route} from  'react-router-dom';

export default class App extends Component   {
  constructor() {
    super();

    this.state = {
      appName: 'Dota 2 Heroes', 
      heroList: [
            {
              name: 'Abaddon',
              desc: 'TAAAA',
              img: 'https://c-7npsfqifvt0x24hbnfqfejbx2edvstfdeox2edpn.g00.gamepedia.com/g00/3_c-7epub3.hbnfqfejb.dpn_/c-7NPSFQIFVT0x24iuuqtx3ax2fx2fhbnfqfejb.dvstfdeo.dpnx2fepub3_hbnfqfejbx2fdx2fddx2fBcbeepo_njojnbq_jdpo.qohx3fwfstjpox3dd0d389ed8b052gd18142e664017fg0e8x26j21d.nbslx3djnbhf_$/$/$/$/$'
            },
            {
              name: 'Alchemist',
              desc: 'SHAAA',
              img: 'https://c-7npsfqifvt0x24hbnfqfejbx2edvstfdeox2edpn.g00.gamepedia.com/g00/3_c-7epub3.hbnfqfejb.dpn_/c-7NPSFQIFVT0x24iuuqtx3ax2fx2fhbnfqfejb.dvstfdeo.dpnx2fepub3_hbnfqfejbx2f2x2f2fx2fBmdifnjtu_njojnbq_jdpo.qohx3fwfstjpox3d9c7g4e8bdcd589f87ed270g2c214430bx26j21d.nbslx3djnbhf_$/$/$/$/$'
            },
            {
              name: 'Ancient',
              desc: 'CHIIII',
              img: 'https://c-7npsfqifvt0x24hbnfqfejbx2edvstfdeox2edpn.g00.gamepedia.com/g00/3_c-7epub3.hbnfqfejb.dpn_/c-7NPSFQIFVT0x24iuuqtx3ax2fx2fhbnfqfejb.dvstfdeo.dpnx2fepub3_hbnfqfejbx2f3x2f36x2fBodjfou_Bqqbsjujpo_njojnbq_jdpo.qohx3fwfstjpox3df4cfdg9deg2614e70c8eg9e45c7ddgf4x26j21d.nbslx3djnbhf_$/$/$/$/$'
            },

            {
              name: 'Anti-Mage',
              desc: 'DAAAA',
              img: 'https://c-7npsfqifvt0x24hbnfqfejbx2edvstfdeox2edpn.g00.gamepedia.com/g00/3_c-7epub3.hbnfqfejb.dpn_/c-7NPSFQIFVT0x24iuuqtx3ax2fx2fhbnfqfejb.dvstfdeo.dpnx2fepub3_hbnfqfejbx2f4x2f41x2fBouj-Nbhf_njojnbq_jdpo.qohx3fwfstjpox3db0237360e86gc9dc8dbc6e079955fd10x26j21d.nbslx3djnbhf_$/$/$/$/$'
            },
             {
              name: 'Arc Warden',
              desc: 'DAAAA',
              img: 'https://c-7npsfqifvt0x24hbnfqfejbx2edvstfdeox2edpn.g00.gamepedia.com/g00/3_c-7epub3.hbnfqfejb.dpn_/c-7NPSFQIFVT0x24iuuqtx3ax2fx2fhbnfqfejb.dvstfdeo.dpnx2fepub3_hbnfqfejbx2f4x2f41x2fBouj-Nbhf_njojnbq_jdpo.qohx3fwfstjpox3db0237360e86gc9dc8dbc6e079955fd10x26j21d.nbslx3djnbhf_$/$/$/$/$'
            },
            {
              name: 'Axe',
              desc: 'CHIIII',
              img: 'https://c-7npsfqifvt0x24hbnfqfejbx2edvstfdeox2edpn.g00.gamepedia.com/g00/3_c-7epub3.hbnfqfejb.dpn_/c-7NPSFQIFVT0x24iuuqtx3ax2fx2fhbnfqfejb.dvstfdeo.dpnx2fepub3_hbnfqfejbx2fgx2fg8x2fByf_njojnbq_jdpo.qohx3fwfstjpox3dec0cf4f60f76e7f9e2de594ge4c5497fx26j21d.nbslx3djnbhf_$/$/$/$/$'
            }
          ]

       }
     }

  render() {

      let heroPics = this.state.heroList.map(hero => {
        return {
          img: hero.img,
          name: hero.name
        };
      })

      console.log(heroPics);


    return (
      <>
        <Navbar appName={this.state.appName}/>

        <Route exact path ="/"
          render={(props) => <HeroPics pics={heroPics}/>}/>

        <Route path ="/heroList" 
          render={(props) => <HeroList heroes={this.state.heroList} />}/>

        <Route path ="/modalPage" component={ModalPage}/>

        <Route path ="/addHero" component={AddHero}/>
      </>
    )
  }  
}