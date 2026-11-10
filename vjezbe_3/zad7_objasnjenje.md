Zadatak 7

Na početku se pokreće event loop i main korutina. U main se stvaraju tri zadatka za timere koji traju 3, 5 i 7 sekundi. Zadaci su raspoređeni za izvođenje, a main zatim preko gather čeka da svi završe.

Svaki timer prvo ispiše koliko mu je sekundi preostalo i onda čeka jednu sekundu. Za vrijeme tog čekanja korutina je pauzirana, ali event loop može izvršavati ostale timere. Zbog toga jedan timer ne zaustavlja druge.

Nakon što prođe sekunda, event loop nastavlja korutine koje su spremne. Svaki timer smanji preostali broj sekundi, ispiše ga i opet čeka. Tako se izmjenjuju izvođenje i čekanje sve dok timer ne dođe do kraja. Zadatak je za to vrijeme još uvijek nedovršen, bez obzira na to izvodi li se njegova korutina ili čeka.

Prvi timer završava nakon otprilike 3 sekunde i ispisuje da je vrijeme isteklo. Njegov zadatak tada je dovršen, a druga dva nastavljaju raditi. Nakon otprilike 5 sekundi završava drugi timer, a nakon 7 sekundi i treći. Main cijelo to vrijeme čeka da svi zadaci završe.

Kad su sva tri zadatka dovršena, main nastavlja nakon gather i završava. Na kraju se zatvara event loop. Program ukupno traje oko 7 sekundi jer se čekanja timera preklapaju, pa trajanje ovisi o najduljem timeru.
