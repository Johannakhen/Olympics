const data = {
  w: window.innerWidth || container.offsetWidth,
  h: window.innerHeight || container.offsetHeight,
  curZoomSpeed: 0,
  zoomSpeed: 50,
  mouse: { x: 0, y: 0 },
  mouseOnDown: { x: 0, y: 0 },
  targeT: { x: Math.PI * 3 / 2, y: Math.PI / 6.0 },
  rotation: { x: 2, y: 1 },
  target: { x: 2, y: 1 },
  targetOnDown: { x: 0, y: 0 },
  levitatingBlocks : [],
  blocks : [],
  distance: 100000,
  distanceTarget: 1000,
  padding: 40,
  PI_HALF: Math.PI / 2,
  cityPosition: [
    [{ city: 'Mexico', lat: 19.2464696, lon: -99.10134979999998, text:'Incoming'}],
    [{ city: 'Athène', lat: 37.9838096, lon: 23.727538800000048, text:'Incoming'}],
    [{ city: 'Anvers', lat: 51.2194475, lon: 4.40246430000002, text:'Back in 1920, the world had seen much bloodshed from World War I, which made many wonder whether the Triple Alliance should be invited to the Olympics. Since the Olympic ideals stated that all countries should be allowed entrance into the Games. Germany, Hungary, Bulgaria, Turkey and Austria were not forbidden to come but they were not sent an invitation by the committee. They took place in Antwerp in homage to the sufferings endured by the Belgians during the Great War and the defeated were expelled from the games. It was one of the first political decision in the history of modern Olympism.', text2:'In the name of all competitors, I promise that we shall take part in these Olympic Games, respecting and abiding by the rules that govern them, committing ourselves to a sport without doping and without drugs, in the true spirit of sportsmanship, for the glory of sport and the honour of our teams". This is the speech that athletes make when they commit to respecting Olympic rules. It was heard for the first time in Antwerp in 1920. Working for fairness and equity by recalling a spirit of competition fair-play, the oath reminds the fundamental values of the Olympic Games.'}],
    [{ city: 'Berlin', lat: 52.52000659999999, lon: 13.404953999999975, text:'While the games are supposed to be focused on sports, the Olympics of 1936, remained a solid example of the confusion of politics and propaganda through sport. Held in Berlin, Adolf Hitler took it as an opportunity to promote his government and ideals of racial supremacy and antisemitism, Jews being forbidden to take part in the games.', text2:'Despite this oath, are the values preached respected? Not really. Back to the Berlin Games of 1936. "Non-Aryan" sportsmen (Jews, half-Jews or Gypsies) were systematically excluded from German sports clubs and associations. Ironically, these Nazi-themed games were the scene of the victory of Jesse Owens, an African-American athlete, who won 4 medals under Hitler\'s eyes and who ended up being hailed as a hero. Hitler ends up leaving the stadium. In addition, young Jewish athletes decided to participate in the games despite the disapproval of Jewish organizations that called for a boycott and ended up winning 9 medals. Hitler\'s attempt to prove his theory of Aryan racial superiority was unsuccessful, as these games helped athletes of many "races" that he despised to shine. '}],
    [{ city: 'Melbourne', lat: -37.81361100000001, lon: 144.96305600000005, text:'If Berlin’s games were used as a passive tool to glorify Hitler’s ideology, Melbourne’s games took a more violent turn. Engaged in an armed conflict at the time, the Hungarian and the Soviets fought during the water-polo contest in 1956 leading one of the Hungarians to leave the pool with blood streaming from a cut over his eye. A riot almost broke out before the police entered the arena and shepherded the crowd away. The event became known as the Blood In The Water match.'}],
    [{ city: 'Rome', lat: 41.9027835, lon: 12.496365500000024, text:'Incoming'}],
    [{ city: 'Munich', lat: 41.9027835, lon: 12.496365500000024, text:'Incoming'}],
    [{ city: 'Montreal', lat: 45.5016889, lon: -73.56725599999999, text:'Incoming'}],
    [{ city: 'Moscou', lat: 55.755826, lon: 37.617299900000035, text:'Jimmy Carter, President of the United States at the time, called for a boycott of the Olympics in Moscow following the violent international policy led by the USSR (like the invasion of Afghanistan). In view of the disaster that was the Melbourne Blood Bath, this decision could be seen as a precaution to prevent any problem from bursting during the games. The boycott was supported by the USOC and 49 nations, but badly received by the IOC who said it had nothing to do with the Olympics and that this boycott would not change the situation in Afghanistan or the relation between the United States and the USSR. In his desire to preserve peace, Jimmy Carter made a decision that went against the alleged neutrality of the Olympics.'}],
    [{ city: 'Atlanta', lat: 33.7489954, lon: -84.3879824, text:'Incoming'}],
    [{ city: 'Londre', lat: 51.5073509, lon: -0.12775829999998223, text:'Incoming'}],
    [{ city: 'Rio', lat: -22.9068467, lon: -43.17289649999998, text:'Incoming'}]
    [{ city: 'About The Project', text:'<strong>Once Upon A Game aka OUAG, is an interactive website born from a school project which tells the story of the Olympic Games from a socio-political point of view.</strong> <p>Through several milestones such as the Games of Antwerp (1920), Berlin (1936), Melbourne (1956), Moscow (1980), Mexico (1968) or Montreal (1976), we tried to demonstrate the following problem: "How does a sporting event exacerbate and expose tensions within the organizing country and in the world? ". In order to achieve this, we carried out a long journalistic work that we transcribed and synthesized while mixing it with a dark graphic aspect.</p> <small>6 month project, 5 contributors: Johanna Khen, Gaoussou Koné, Florian Planchenault, Jade Mihami, Tiffanie Train.</small>'}]
  ]
}
export default data;