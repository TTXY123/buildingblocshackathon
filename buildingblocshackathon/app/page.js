"use client";

import { useEffect } from "react";
import { animate, onScroll } from "animejs";

export default function Page() {
  useEffect(() => {
   
    animate(".scroll", {

   //animation properties for the object

   autoplay: onScroll({

  //type customisations here.

   }),
});
  }, []);

  return (
<div className="flex flex-col items-center px-6">


  <div className="max-w-3xl text-center my-10">
    <h1 className="text-4xl font-bold mb-4">
      We are writing the World's Final Chapter
    </h1>

    <p className="text-lg leading-7">
      From the first industrial chimneys to today's choking smog, humans have always
      wondered when the world will end—never realising that we are the ones pushing it
      toward the edge. Forests fall, oceans choke, and species vanish while we look
      away. Our fate isn't written in the stars; it's carved by our own hands. If we do
      not act now to protect the environment and the animals we share it with, the grave
      we are digging will soon be our own. The choice to save the Earth still exists—but
      only if we take it. Even though we have not received any big impact, animals have.
      They are canaries in the coal mine, and their troubles will soon be our apocalypse.
    </p>
  </div>




  <div className="max-w-3xl my-14">
    <div className="heading-box w-full h-2 bg-black mb-4"></div>

    <h2 className="text-2xl font-bold text-center mb-4">
      One of the first few animals to have a great decline in population due to
      deforestation is the Sumatra Orangutan.
    </h2>

    <p className="text-lg leading-7">
      The Sumatran Orangutan (<em>Pongo abelii</em>), native to northern Sumatra,
      Indonesia, has been listed as "Critically Endangered" by the IUCN Red List since
      2002. Their population has declined by approximately 80% in the past 75 years, from
      70,000 in 1950 to about 14,000 in 2025. The main causes of their decline are habitat
      loss due to palm oil plantations, logging, mining, and infrastructure. Below are
      some ways to help conserve their species in the wild:
    </p>




    <div className="mt-6 space-y-4 text-center text-xl">

      <div>
        <strong>No.1:</strong> Set up more sanctuaries, wildlife centres, and orphanages
        for the Sumatran Orangutan (result: more orangutans saved from natural disasters
        or poaching).
      </div>

      <div>
        <strong>No.2:</strong> Field Monitoring: track relocated and wild orangutan
        populations to understand their needs and threats.
      </div>

      <div>
        <strong>No.3:</strong> Recruit and train more rangers to ensure poachers are kept
        at bay.
      </div>

      <div>
        <strong>No.4:</strong> Choose fruit brands that do not use hidden palm oil
        derivatives.
      </div>

      <div>
        <strong>No.5:</strong> Spend three minutes daily behind a tree just listening.
        This builds emotional bonds, which encourages protection of forests—trees are
        living beings after all!
      </div>

    </div>
    <div class="section">

  
 <a href="#" className="img-link">
        <img
          id="polar-img"
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..." //pls replace with the actual link
          width={500}
          height={500}
          alt="Polar Bear"
        />
      </a>

      <h3 id="polar-heading">Next up is the polar bear.</h3>

      <p id="polar-text text-lg text-center leading-7">

        The polar bear is a large bear native to the Arctic. According to Wikipedia, the polar bear
        is the largest extant species of bear, with adult males weighing 300–800 kg. Currently, they
        are listed as "Vulnerable" due to melting ice and declining hunting conditions. Several
        populations—especially in southern regions—are experiencing steep declines.
      </p>

    <div class="tip" id="tip1">
        No.1: The "Invisible-Ice" Habit—reduce unnecessary heat from appliances. Unplug chargers when not in use,
        keep fridges ventilated, and avoid leaving electronics running overnight.
    </div>

    <div class="tip" id="tip2">
        No.2: Grow one shadow-making plant near your window or balcony. Even one small plant helps cool your home.
    </div>

    <div class="tip" id="tip3">
        No.3: "Cold Hour for the North"—choose one hour each day where you avoid creating excess heat
        (no cooking, ironing, long showers, etc.)
    </div>

  
<img
  src="/path/to/image.jpg"
  width={500}
  height={500}
  alt="Description"
/>


<img
  src="/path/to/image.jpg"
  width={500}
  height={500}
  alt="Description"/></div>


    </div>

    <h4 id="amur-heading text-lg text-center leading-7">
      Thirdly, the Amur Leopard</h4>

    <p id="amur-text text-lg text-center leading-7">
        The Amur leopard is a critically endangered subspecies with fewer than 100 individuals remaining.
        Threats include habitat loss, poaching, and prey depletion. Conservation efforts include anti-poaching
        patrols, habitat restoration, and captive breeding programs.
    </p>

    <div class="tip text-lg text-center leading-7" id="amur-tip1">
        No.1: Support conservation groups like WWF and ALTA.
    </div>

    <div class="tip text-lg text-center leading-7"  id="amur-tip2">
        No.2: Raise awareness by sharing information and educating others.
    </div>

    <div class="tip text-lg text-center leading-7"  id="amur-tip3">
        No.3: Advocate for stronger anti-poaching laws and conservation funding.
    </div> //IDK HOW YOURE GONNA DO THIS BUT IM OUT OF TIME. GD LUCK. FOLLOW THE ABOVE STRUCTURE TO DO FOR THE OTHER POINTS. 
    //if u want to make the thing have animations cos idk how yall want it to be, put it in animation properties for the object
//I COMMENTED IT OUT ALREADY
  //for the other place i commented out, "type customisations here", it's kinda like, where u scroll=something happen. some customisations r  enter: "80% 20%",
  // leave: "50px -25px",
 //  sync: 0.25, 
//pls try to figure stuff out
//pls dont glitch the github
//pls dont cause a merge conflict
//gd luck
 </div>
  );
}
