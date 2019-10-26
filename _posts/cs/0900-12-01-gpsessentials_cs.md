---
layout: doc
title: GPS Essentials
permalink: /cs/mobile-mapping/gpsessentials/
lang: cs
category: mobile-mapping
--- 



GPS Essentials
===================

> Zkontrolováno 2015-05-24  

Instalace GPS Essentials
-------------

1. Otevřete si aplikaci “Google Play Store” ve vašem Android zařízení.
2. Klikněte na "Vyhledávací" ikonu vpravo nahoře.
3. Vyhledejte “GPS Essentials”.
4. Označte ikonu GPS Essentials a vyberte "Instalovat". Ikona vypadá takhle:

   ![GPS Essentials logo][]

Pokud nemáte přístup do Google Play nebo chcete stáhnout jinou než stabilní verzi,
jako třeba starší nebo nejnovější betu, můžete stáhnout GPS Essentials z http://www.images.com.

Konfigurace GPS Essentials pro práci offline
-------------

1. Spusťte GPS Essentials. Otevřete Settings a vyberte Map Cache. Nastavte cache limit na maximum.

   ![Map Cache][]

2. Připojte se k rychlé síti. Na hlavní obrazovce vyberte 'Portable Maps'. Všechny mapy zobrazené v módu portable
map se automaticky uloží do paměti Androidu. Uložte si mapy, které budete potřebovat offline v maximálním detailu
a pomalu si přibližte každý výchozí bod.

3. Odpojte se ze sítě a podívejte se na mapy v módu portable map. Pokud některé mapy postrádají detail, znovu se připojte
 k Internetu a pomalu si přibližte oblast, kterou potřebujete.

Funkce GPS na Android telefonu
-------------

Před použitím GPS Essentials se ujistěte, že máte povolenou GPS v telefonu.

![Enable GPS in Android][]

Připojení k satelitům
-------------

Dříve než začne přijímač GPS vysílat lokaci (taktéž nazáváno GPS fix), musí přijmout signály z nejméně čtyř satelitů.
Čím níže je satelit nad horizontem, tím déle signál putuje skrze atmosféru, takže satelity
vysoko nad horizontem mají obvykle lepší signály. 

Kontrola satelitů ve vaší oblasti:

1. V hlavním menu vyberte Satellites.

   ![Satellites page][]

2. Pokud se zobrazí alespoň čtyři připojené satelity, pak můžete začít používat funkce GPS Essentials.

Vytváření tras
-------------

1. Z hlavního menu vyberte Tracks.

2. Zmáčkněte Start. Vytvoří se nová trasa a začne záznam. Vyčkejte několik sekund dokud se GPS 
nepřipojí.

   ![New Track][]

3. Tlačítkem Pause pozastavíte záznam. Opětovným zmáčknutím záznam znovu spustíte.

Vytváření výchozích bodů
-------------

### Pomocí Portable Maps

1. Z hlavního menu vyberte Portable Maps.

2. Podržte prst na mapě pro vytvoření nového kurzoru.

   ![Waypoints1][]

3. Přesuňte kurzor na místo, kde chcete vytvořit nový výchozí bod.

4. Zmáčkněte tlačítko Actions a zobrazí se podokno akcí. Ikona Actions vypadá takhle:
	
   ![Actions][]
	
5. Zmačknutím Add Tool vytvoříte výchozí bod.
	
   ![Waypoints2][]
	
### Pomocí Google Maps

1. Z hlavního menu vyberte Google Maps.

2. Nejďte na místo, kde chcete vytvořit váš výchozí bod.

3. Zmáčkněte tlačítko Add Tool. Ťukněte na místo na mapě a tam 
   se výchozí bod vytvoří. Pokud ho chcete vytvořit na vaší aktuální pozici, zmáčkněte tlačítko
   Přidat výchozí bod ještě jednou.

   ![GoogleMaps][]

4. Opakujte krok 2 a 3 dokud nebudete mít umístěné všechny výchozí body.

### Pomocí stránky Waypoints

1. Z hlavního menu vyberte Waypoints.

2. Výchozí bod vytvoříte přes ikonu Add tool.

   ![Waypointspage1][]

3. Začne se zaznamenávat váš první výchozí bod. Můžete změnit atributy výchozího bodu
   a poté zmáčknout Back, pro návrat zpět na seznam.
	
   ![Waypointspage2][]

4. Přepnutím do mapy se vám výchozí bod zobrazí přímo ve své lokaci.
	
   ![Waypointspage3][]

5. Zmáčknutím ikony Close se výchozí bod uloží. Ikona Close vypadá takhle:
	
   ![Close][]


	
Přidání lokace k fotkám
-------------

1. V hlavním menu vyberte Camera.

2. Vyfoťte oblast, ke které chcete přidat lokaci.

3. Foto bude sloužit jako výchozí bod a automaticky se uloží do Portable Maps
a na stránku Google Maps.

4. Data (lokace obrázku a název fota) se také zapíšou na stránku Waypoints.
Každému obrázku můžete přiřadit ikonu. Ikona se zobrazí v
Portable Maps a na stránce Google Maps.

Uložené fotky
-------------

Všechny vaše obrázky jsou uloženy v adresáři com.mictale.images na vaší SD kartě. Můžete
je odsud smazat a dokonce sem můžete přidat i nové. GPS Essentials pravidelně prohledává tento adresář,
jestli neobsahuje něco nového.

Export/Ukládání výchozích bodů
-------------

1. Z hlavního menu vyberte Waypoints. Zobrazí se vám seznam výchozích bodů, které jste zaznamenali.

2. Pokud je chcete exportovat, vyberte Export z nabídky Options. Pokud chcete exportovat
jeden výchozí bod, vyberte jej a klikněte na Options a pak Export.

3. Dostanete na výběr z dostupných formátů k exportu.
Tentokrát zvolíme KML (Google Earth).

   ![Export file format][]

4. Zmáčkněte ikonu SD karty pro vlastní výběr umístění soubor.

   ![Export to SD card][]

5. A zmáčkněte Save pro uložení.

   ![Arrow][]

Export/Ukládání tras
-------------

1. Z hlavního menu vyberte Tracks. Zobrazí se vám seznam vašich zaznamenaných tras.

2. Zmáčkněte tlačítko Options a pak vyberte Export, pro vytvoření souboru z aktuálně vybrané trasy.

3. Pokud chcete exportovat předchozí trasu, zmáčkněte ikonu Tracks a vyberte požadovanou trasu.
   Dále tlačítko Options a vyberte Export. Ikona Tracks vypadá takhle:

   ![Footprints][]


4. Z nabídky si vyberte formát souboru, do kterého chcete data exportovat.
   Tentokrát zvolíme KML (Google Earth).

   ![Export1][]

4. Zmáčkněte ikonu SD karty pro vlastní výběr umístění soubor.

   ![Export3][]

5. A zmáčkněte Save pro uložení.

   ![Arrow][]

[GPS Essentials logo]:  /images/mobile-mapping/gpsessentials-Logo.png
[Map Cache]:  /images/mobile-mapping/gpsessentials-mapcache.png
[Enable GPS in Android]:  /images/mobile-mapping/gpsessentials-GPSenable.png
[Satellites page]:  /images/mobile-mapping/gpsessentials-satellites.png
[New Track]:  /images/mobile-mapping/gpsessentials-newtrackstart.png
[Waypoints1]:  /images/mobile-mapping/gpsessentials-cursor.png
[Actions]:  /images/mobile-mapping/gpsessentials-actionsbutton.png
[Waypoints2]:  /images/mobile-mapping/gpsessentials-addwaypoint.png
[GoogleMaps]:  /images/mobile-mapping/gpsessentials-addwaypointgooglemaps.png
[Waypointspage1]:  /images/mobile-mapping/gpsessentials-add.png
[Waypointspage2]:  /images/mobile-mapping/gpsessentials-wp.png
[Waypointspage3]:  /images/mobile-mapping/gpsessentials-map.png
[Close]:  /images/mobile-mapping/gpsessentials-save.png
[Export file format]:  /images/mobile-mapping/gpsessentials-export.png
[Export to SD card]:  /images/mobile-mapping/gpsessentials-exportwaypoints.png
[Arrow]:  /images/mobile-mapping/gpsessentials-savebutton.png
[Footprints]:  /images/mobile-mapping/gpsessentials-tracksicon.png
[Export3]:  /images/mobile-mapping/gpsessentials-sdcardsave.png