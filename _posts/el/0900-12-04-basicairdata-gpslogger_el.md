---
layout: doc
title: BasicAirData GPS Logger
permalink: /el/mobile-mapping/basicairdata-gpslogger/
lang: el
category: mobile-mapping
---

BasicAirData GPS Logger
=======================

> Reviewed 2021-06-12

![BasicAirData-GPSLogger-002][]

Το BasicairData GPS Logger είναι μια απλή εφαρμογή για να καταγράψετε τη θέση σας και τη διαδρομή σας. Είναι ένα απλό και ελαφρύ GPS tracker με έμφαση στην ακρίβεια και την εξοικονόμηση ενέργειας. Αυτή η εφαρμογή είναι πολύ ακριβής για τον προσδιορισμό του υψομέτρου σας, αν ενεργοποιήσετε την αυτόματη διόρθωση υψομέτρου, EGM96, στις ρυθμίσεις. Μπορείτε να καταγράψετε όλες τις διαδρομές σας, να τις προβάλετε στην προτιμώμενη τρίτη εφαρμογή θέασης (πρέπει να την εγκαταστήσετε ξεχωριστά) απευθείας από την λίστα διαδρομών που βρίκεται εντός της εφαρμογής μας και να τις μοιραστείτε σε μορφή KML, GPX και TXT με πολλούς τρόπους.

Η εφαρμογή είναι διαθέσιμη για συσκευές Android, διατίθεται δωρεάν και είναι ανοικτού κώδικα.

Η εφαρμογή είναι ελεύθερα διαθέσιμη από το [Google Play (tm)](https://play.google.com/store/apps/details?id=eu.basicairdata.graziano.gpslogger). <br>
Ως εναλλακτική λύση, το APK είναι άμεσα διαθέσιμο για κατέβασμα στο [αποθετήριο GitHub](https://github.com/BasicAirData/GPSLogger/tree/master/apk).

Λειτουργικότητα
--------

![BasicAirData-GPSLogger-000][]

* Καταγραφή διαδρομής - η εφαρμογή δεν έχει ενσωματωμένους χάρτες
* Ένα σύγχρονο UI με σκοτεινό θέμα χαμηλής κατανάλωσης και διεπαφή εμφάνισης με καρτέλες
* Εγγραφή προσκηνίου και παρασκηνίου (Στο Android 6+ παρακαλώ απενεργοποιήστε την παρακολούθηση και τις βελτιστοποιήσεις κατανάλωσης μπαταρίας  για αυτήν την εφαρμογή)
* Δημιουργία Σημείου ενδιαφέροντος και κατά την εγγραφή
* Οπτικοποίηση πληροφοριών GPS
* Χειροκίνητη διόρθωση υψομέτρου (προσθέτοντας μια συνολική μετατόπιση)
* Αυτόματη διόρθωση υψομέτρου βάσει του Μοντέλου Earth Geoid NGA EGM96  (πρέπει να ενεργοποιηθεί στις ρυθμίσεις)
* Στατιστικά διαδρομής σε πραγματικό χρόνο
* Εντός εφαρμογής λίστα διαδρομών, που δείχνει τη λίστα των εγγεγραμμένων διαδρομών
* Οπτικοποίηση των διαδρομών σας χρησιμοποιώντας οποιοδήποτε εγκατεστημένο πρόγραμμα προβολής KML/GPX, απευθείας από την λίστα διαδρομών
* Εξαγωγή διαδρομών στο φάκελο /GPSLogger της συσκευής σας, σε KML, GPX και TXT
* Διαμοιρασμός διαδρεομών, σε μορφή KML, GPX και TXT, μέσω e-mail, Dropbox, Google Drive, FTP,...
* Χρησιμοποιεί μετρικές, αυτοκρατορικές ή ναυτικές μονάδες μέτρησης

Βασική Χρήση
-----------

![BasicAirData-GPSLogger-001][]

Αν η θέση GPS δεν είναι ενεργή στο τηλέφωνό σας, ενεργοποιήστε την. Στη συνέχεια, πηγαίνετε σε μια ανοιχτή περιοχή και ξεκινήστε GPS Logger.

1. Περιμένετε έως ότου η εφαρμογή κλειδώσει στο στίγμα σας. Όταν είναι διαθέσιμη, η καρτέλα __GPS FIX__ θα αρχίσει να εμφανίζει τις συντεταγμένες στίγματος. Σε αυτό το σημείο (όποτε είναι δυνατόν) θα πρέπει να περιμένετε τουλάχιστον ένα λεπτό πριν προχωρήσετε στην επόμενη φάση για να επιτρέψετε στο σήμα να σταθεροποιηθεί
2. Click the __Record__ button of the bottom panel to start recording track points. The button will become red. switch recording process on and off at any time by clicking on that button. At the top of the button the app shows the number of the trackpoints recorded.
Μπορείτε να μεταβείτε στην καρτέλα __TRACK__ για να δείτε σε πραγματικό χρόνο τα στατιστικά στοιχεία του ταξιδιού σας.
3. When your trip is finished, click the __Stop__ button to finalize (finish) the active track. A dialog will appear, click __OK__ to confirm.
4. Go to the __TRACKLIST__ tab, where you will find the track you have just recorded. Tap on the track. A menu will appear. You can choose to share the track in many ways, view it using an installed external viewer, edit the track details, export it into /GPSLogger folder of your smartphone, or delete it from the tracklist. The formats used for export can be configured on the settings screen.

Εισαγωγή διαδρομών GPX στον Επεξεργαστή OpenStreetMap
--------------------------------------------

Όταν ολοκληρώσετε τη συλλογή δεδομένων από το πεδίο, μπορείτε να εισαγάγετε τις διαδρομές GPX για χρήση στο JOSM, το iD ή σε άλλο Επεξεργαστή OpenStreetMap.
Μπορείτε να χρησιμοποιήσετε αυτήν την απλή διαδικασία 2 βημάτων:

1. Αποθηκεύστε τη διαδρομή GPX στον προσωπικό σας υπολογιστή με έναν από τους παρακάτω τρόπους:
* Πηγαίνετε στη λίστα διαδρομών του GPS Logger, πατήστε στην επιθυμητή διαδρομή και στη συνέχεια κάντε κλικ στο __Export__. Το αρχείο GPX θα δημιουργηθεί και θα αποθηκευτεί στο φάκελο /GPSLogger της Android συσκευής σας (βεβαιωθείτε ότι η μορφή GPX είναι ενεργοποιημένη στην οθόνη ρυθμίσεων). Στη συνέχεια, συνδέστε το τηλέφωνο με τον υπολογιστή σας χρησιμοποιώντας ένα καλώδιο USB και μετακινήστε (ή αντιγράψτε) τα κομμάτια GPX στον υπολογιστή σας χρησιμοποιώντας τον Διαχειριστή Αρχείων.
* Εναλλακτικά, μπορείτε να χρησιμοποιήσετε τη λειτουργία __Share__ για να στείλετε το αρχείο στον υπολογιστή (μπορείτε να το κάνετε μέσω e-mail, FTP ή χρησιμοποιώντας άλλες υπηρεσίες Cloud). Οι δυνατότητες κοινής χρήσης εξαρτώνται από τις εφαρμογές τρίτων που είναι εγκατεστημένες στην Android συσκευή σας.
2. Εισαγάγετε το κομμάτι GPX στον Επεξεργαστή OpenStreetMap που διαθέτετε: η χρήση των κομματιών GPX με τους επεξεργαστές JOSM και iD γίνεται εύκολα, σύροντας τα αρχεία και ρίχνοντας τα στην εφαρμογή (ή στην καρτέλα του προγράμματος περιήγησης, για τον iD).

Επίσημη Τεκμηρίωση
----------------------

- Για περισσότερες πληροφορίες σχετικά με αυτό το app μπορείτε να διαβάσετε σε [αυτό το άρθρο](http://www.basicairdata.eu/projects/android/android-gps-logger/). <br>
- [Εδώ](http://www.basicairdata.eu/projects/android/android-gps-logger/getting-started-guide-for-gps-logger/) μπορείτε να βρείτε έναν Οδηγό για να Ξεκινήσετε και μια Επισκόπηση των Ρυθμίσεων της Εφαρμογής. <br>
Προβλήματα κατά τη χρήση ή τη ρύθμιση του GPS Logger; Διαβάστε τη σελίδα [Συνήθεις Ερωτήσεις](https://github.com/BasicAirData/GPSLogger/blob/master/readme.md#frequently-asked-questions)!

[BasicAirData-GPSLogger-002]:  /images/mobile-mapping/basicairdata-gpslogger_002.en.jpg
[BasicAirData-GPSLogger-000]:  /images/mobile-mapping/basicairdata-gpslogger_000.en.jpg
[BasicAirData-GPSLogger-001]:  /images/mobile-mapping/basicairdata-gpslogger_001.en.jpg