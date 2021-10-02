import { getElementError } from '@testing-library/dom';
import React from 'react';
import './App.css';
import HelloWorld from './Components/HelloWorld';
import Paauutinen from './Components/PaaUutinen';
import Sivuutiset from './Components/Sivuutiset';
import Uutiset from './Components/uutiset';
import Ylapalkki from './Components/Ylapalkki';
import Uusimmat from './Components/Uusimmat';
function App() {
  const sivuut = [
    {
      numero: 1,
      laihe: 'Tietosuoja |',
      tieto: 'testi toinen testi testi toinen testi testi toinen testi testi toinen testis testi toinen testi testi toinen testi',
      otsikko: 'LUETUIMMAT'
    },


    {
      numero: 2,
      laihe: 'toinen juttu |',
      tieto: 'testi toinen testi testi toinen testi testi toinen testi testi toinen testis testi toinen testi testi toinen testi',
    },

    {
      numero: 3,
      laihe: 'ddasdsa |',
      tieto: 'testi toinen testi testi toinen testi testi toinen testi testi toinen testis testi toinen testi testi toinen testi',
    },
  ];






  const uusimmat = [
    {
      numero: 1,
      laihe: 'Tietosuoja |',
      tieto: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised ',
      otsikko: 'UUSIMMAT'
    },


    {
      numero: 2,
      laihe: 'toinen juttu |',
      tieto: 'testi toinen testi testi toinen testi testi toinen testi testi toinen testis testi toinen testi testi toinen testi',
    },

    {
      numero: 3,
      laihe: 'ddasdsa |',
      tieto: 'testi toinen testi testi toinen testi testi toinen testi testi toinen testis testi toinen testi testi toinen testi',
    },
  ];




  const puutiset = [

    {
      paihe: 'TESTIKIRJOITUS',
      aihe: 'Koronavirus | ',
      otsikko: 'Nyt on juhlan aika ja se näkyy jo – Anna Freund leipoo kymmenen kakkua joka päivä ja käännyttää asiakkaita ovelta',
      osasto: 'Kaupunki',
      aika: '14:28'
    },

    {
      paihe: 'TESTIKIRJOITUS',
      aihe: 'Koronavirus | ',
      otsikko: 'Nyt on juhlan aika ja se näkyy jo – Anna Freund leipoo kymmenen kakkua joka päivä ja käännyttää asiakkaita ovelta ',
      osasto: 'Kaupunki',
      aika: '14:28'
    }




  ]

  const uutisilmoitukset = [
    {
      aihe: 'PÄIVÄN TIMANTTI',
      body: 'Tutkija kertoo: Näin sota näkyy meissä edelleenkin'
    },
    {
      aihe: 'PÄIVÄN TIMANTTI',
      body: 'Harriet Rabb tajusi avioliiton taloudelliset hyödyt ja kosi - Näin hän säästäisi aviopuolisona 19 200 euroa'
    },
    {
      aihe: 'MAINOS',
      body: 'Faktoille on nyt suurempi tarve kuin koskaan - tutustu Hesariin 2 viikkoa maksutta'
    }

  ];


  return (
    <div className="taustaväri" >

      <Ylapalkki />

      {

        uutisilmoitukset.map(element => <Uutiset aihe={element.aihe} body={element.body} />)
      }
      {
        sivuut.map(element => <Sivuutiset numero={element.numero} laihe={element.laihe} tieto={element.tieto} otsikko={element.otsikko} />)
      }

      {
        uusimmat.map(element => <Uusimmat numero={element.numero} laihe={element.laihe} tieto={element.tieto} otsikko={element.otsikko} />)
      }
      {
        puutiset.map(element => <Paauutinen aihe={element.aihe} paihe={element.paihe} otsikko={element.otsikko} osasto={element.osasto} aika={element.aika} />)
      }
    </div>
  );
}

export default App;
