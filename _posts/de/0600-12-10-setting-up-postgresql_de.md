---
layout: doc
title: PostgreSQL aufsetzen
permalink: /de/osm-data/postgresql/
lang: de
category: osm-data
---

PostgreSQL & PostGIS
====================


In diesem Kapitel werden wir sehen wie man PostgreSQL unter Windows aufsetzt und eine Datenbank erstellt in der man geografische Daten speichern kann. Wir verwenden Open Source GIS Software QGIS in diesem Kapitel, es ist als hilfreich, wenn man bereits damit umgehen kann. Im folgenden Kapitel werden wir uns anschauen, wie man OpenStreetMap Daten in eine PostgreSQL Datenbank importiert.  

PostgreSQL and PostGIS installieren
----------------------------------

In diesem Abschnitt werden wir PostgreSQL installieren und die PostGIS Spatial Erweiterungen hinzufügen. Dies geschieht relativ leicht mit einem One-Click Installationsprogramm. Man öffnet die PostgreSQL Webseite mit dem Browser und die Download Seite <http://www.postgresql.org/download/>  

![postgresql website][]

Her findet man Installationsanleitungen für verschiedene Betriebssysteme. Man klickt auf den "**Windows**" Link.  
Die Seite erklärt, was das One-Click Installationsprogramm macht. Es installiert drei unterschiedliche Komponenten:  

* **PostgreSQL Server**: Die Datenbank Software, die Kernkomponente  
* **pgAdmin 4**:  Das grafische Interface zur Datenbankverwaltung  
* **StackBuilder**: Ein Werkzeug zum Hinzufügen weiterer Anwendungen; wir verwenden es um die PostGIS Erweiterungen hinzuzufügen  

Man klickt auf **Download**.  

![postgresql download][]

Man sieht unterschiedliche Installationsoptionen für unterschiedliche Versionen der PostgreSQL Software. Man lädt die aktuellste Version herunter.

![postgresql version][]

Wen das herunterladen beendet ist, startet man das One-Click Installationsprogramm.  

![install 1][]

Man klickt "**Weiter**" um durch den Installationsassistenten zu kommen. Die Standardoptionen sollten in Ordnung sein. Man muss für den ersten Datenbankbenutzer (der Benutzer heißt postgres) ein Passwort bereit halten. Der Benutzer hat superuser Rechte was bedeutet, dass er alles was er tun möchte tun kann, also nicht das verwendete Passwort vergessen!  

> Man kann mit PostgreSQL beliebig viele Datenbanken anlegen. Man möchte gegebenenfalls eine Datenbank für die geografischen Daten und separate Datenbanken für andere Projekte an denen man arbeitet. Und man möchte gegebenenfalls unterschiedliche Benutzer mit unterschiedlichem Zugang zu diesen Datenbanken. Zu diesem Zwecke nutzt jede erstellte Datenbank das **Benutzer** und **Rollen** Konzept. Eine Datenbank gehört immer einem Benutzer und dieser Benutzer benötigt ein Passwort um Änderungen an der Datenbank vornehmen zu können. Zusätzlichen Benutzern können Rechte und bestimmte Rollen für den Zugriff auf eine Datenbank gegeben werden. Man möchte zum Beispiel einen Datenbankbenutzer, der nur Informationen aus der Datenbank lesen kann, aber nicht ändern. Oder einen Benutzer der Daten hinzufügen, aber nicht löschen kann. Das ist mit Benutzern und Rollen möglich. Wir werden uns nun nicht weiter damit beschäftigen, aber behalten im Kopf, dass die Datenbank einem **Benutzer** gehört und dass man für den Zugriff auf die Datenbank den Benutzernamen und Passwort braucht. Der erste angelegte Benutzer (genannt postgres) ist ein **superuser**, was bedeutet dass diese die Rechte dazu haben, alles mit den Datenbanken anzustellen.  

Nachdem man sich durch den Assistenten geklickt und die Standardkonfigurationsoptionen akzeptiert hat, installiert der Assistent alles für einen. Dies kann einige Minuten dauern.  

Wenn die Installation komplett ist, fragt der Assistent ob man StackBuilder starten möchte, das Werkzeug welches uns erlaubt PostGIS zu installieren. Man versichert sich, dass das Kontrollkästchen angehackt ist ehe man auf "**Beenden**" klickt.  

![install 2][]

Wir haben nun erfolgreich PostgreSQL installiert und müssen noch die PostGIS Erweiterungen hinzufügen. Wenn der StackBuilder Assistent sich öffnet, wählt man die PostgreSQL Installation aus dem Auswahlmenü und klickt **Weiter**. Es wird so ähnlich aussehen:  

![install 3][]

Man öffnet das "Spatial Erweiterungen" Tab und klickt die Box neben PostGis an. Die beim Schreiben dieses Textes aktuelle Version von PostGIS ist 2.1.  

![install 4][]

Zum Herunterladen und Installieren klickt man **Weiter**. Man klickt "**Ich stimme zu**", wenn nach dem Akzeptieren der Geschäftsbedingungen gefragt wird.  

Das PostGIS Installationsprogramm wird mehrere Fragen stellen, die Standardoptionen sind aber meistens in Ordnung. Man kann die erste Datenbank automatisch erstellen lassen, aber wir werden als nächstes lernen wie man dies selbst macht. Um die PostGIS Installation zu starten, muss man das postgres Passwort angeben, das man erstellt hat als man PostgreSQL installiert hat.  

![install 5][]

Wenn man gefragt wird, ob die **GDAL_DATA** Umgebungsvariable registriert werden soll, klickt man "**Ja**".  

![install 6][]

Wenn die Installation komplett ist, klickt man "**Schließen" und dann "**Beenden**".  

Eine Datenbank erstellen
--------------------

Da wir nun alle notwendige Software installiert haben, können wir eine Datenbank erstellen. Wir verwenden pgAdmin 4, ein grafischer Datenbank Klient zur Abfrage und Änderung von
Datenbanken.  

![pgadmin3][]

PgAdmin 4 ist der offizielle Klient für PostgreSQL und erlaubt die Verwendung der SQL Sprache um Datentabellen zu bearbeiten. Man kann auch Datenbanken von der Kommandozeile aus erstellen und bearbeiten, aber im Moment ist pgAdmin 4 ein leichter Einstieg.  

Man öffnet pgAdmin 4. Man findet es im Startmenü unter Alle Programme -> PostgreSQL 9.3 -> pgAdmin 4.  

![pgadmin3 start][]

Man macht einen Rechtsklick, auf der linken Seite in der Leiste unter Servers, bei PostgreSQL und klickt "**Verbinden**".  

![postgresql connect][]

Man gibt das postgres Benutzerpasswort ein, dass man erstellt hat bei der Installation der Software. Man erinnert sich, dass der Benutzername und Passwort notwendig sind, um eine Datenbank zu erstellen oder um darauf zuzugreifen.  

![enter password][]

Man macht einen Rechtsklick auf **Datenbanken** und selektiert **Neue Datenbank**...  

![new database][]

Man muss ein paar Informationen eingeben, um eine neue Datenbank zu erstellen: Name und Eigentümer. Im Eigenschaften Tab gibt man der Datenbank einen Namen. In diesem Beispiel benennen wir unsere Datenbank gisdb. Wir sollten ihr auch einen Eigentümer zuweisen. Das wir aktuelle nur einen Benutzer haben, geben wir ihr den Eigentümer postgres. (Beachte: Aus Sicherheitsgründen sollte man Benutzer ohne superuser Rechte erstellen, aber im Moment kümmern wir uns nicht weiter darum.)  

![new database form][]

<!-- Man behält die Standardeinstellungen im Definition Tab bei, aber neben Template wählt man template_postgis. Das erstellt unsere Datenbank mit den korrekten spatial Spalten. -->

Man klickt **OK* zum Erstellen der Datenbank. Man findet nun die Datenbank unter "**Datenbanken**" gelistet. Man muss nun ein Kommando ausführen, um die Datenbank mit den PostGIS Erweiterungen zu aktivieren. Man klickt auf ![sql button][]{: height="24px"} oben im Fenster von PgAdmin 4.  



Im Abfragefenster gibt man ein:  

**CREATE EXTENSION postgis;**  

Dann klickt man den "**Abfrage ausführen**" Button.  

![postgis command][]

Man lädt die Beispieldaten (optional)
---------------------------

Bleiben Sie dran, selbst wenn man soweit folgen konnte und mit QGIS umgehen kann, solange wir einige Daten in unsere neue Datenbank laden. Wir werden ein Werkzeug verwenden, welches Shapefiles konvertiert und in die Datenbank lädt.  

Man stellt sicher, dass die neue Datenbank ausgewählt ist in der linken Leiste und geht zu  **Plugins -> PostGIS Shapefile and DBF loader 2.x**.

![shapefile loader][]

-	Man klickt “**Datei hinzufügen**” und geht zum Shapefile auf dem Dateisystem.
-	Falls man keine Shapefiles hat, kann man ein Beispiel [hier](/files/buildings_sample.zip) herunterladen.
-	Wenn man eine Datei ausgewählt hat, klickt man “**Import**.”  Wenn alles korrekt läuft, liest man in der Ausgabe “**Shapefile import completed**.”

![add shapefile][]

Man lädt nun die Daten aus der Datenbank in die QGIS Anwendung. Falls man kein QGIS installiert hat, kann man es von der [QGIS Webseite](http://www.qgis.org/site/forusers/download.html) herunterladen.  

-	Man öffnet QGIS und klickt den ![qgis add postgis button][]{: height="24px"} Button.  
-	Oben unter “Verbindungen”, klickt man “**Neu**.”  
-	Man gibt der neuen Verbindung einen Namen.  Unter Datenbanktyp **gisdb** (oder wie auch immer man die Datenbank benannt hat). Darunter gibt man den Benutzernamen postgres und das Passwort ein.  

![connection settings][]

-	Man klickt **OK** um die Verbindungseinstellungen zu speichern.  Dann “Verbinden” um sich zum PostgreSQL Server zu verbinden. Man muss gegebenenfalls Benutzername und Passwort erneut angeben.  
-	Wenn alles korrekt gelaufen ist, sieht man den Shapefile Layer (oder mehrere Layer mit unterschiedlichen Kartenelementtypen), welche man in die Datenbank geladen hat. Man wählt einen Layer und klickt "**Hinzufügen**" um ihn zur Karte hinzuzufügen.  

![your data layer][]

Wenn man einen Layer hinzufügt, muss man ein Koordinatensystem auswählen, in dem die Daten angezeigt werden. Man wählt in der Regel WGS 84, das Koordinatensystem, das OpenStreetMap verwendet.  

> Der Layer verhält sich genauso, als wenn an ein Shapefile direkt in QGIS geladen hätte. Der einzige unterschied ist, dass wenn man den Layer bearbeitet, die Änderungen in der Datenbank gespeichert werden.  

Zusammenfassung
-------

Da man nun gesehen hat, wie man PostgreSQL und PostGIS aufsetzt und weiß, wie man eine neue Datenbank erstellt, kann man nun die Dienstprogramme zum Import von OSM Rohdaten in die Datenbank ausprobieren. Wir sehen uns das im [nächsten Kapitel](/en/osm-data/osm2pgsql) an.  



[postgresql website]: /images/osm-data/postgresql-website.png
[postgresql download]: /images/osm-data/postgresql-download.png
[postgresql version]: /images/osm-data/postgresql-version.png
[install 1]: /images/osm-data/postgresql-install-1.png
[install 2]: /images/osm-data/postgresql-install-2.png
[install 3]: /images/osm-data/postgresql-install-3.png
[install 4]: /images/osm-data/postgresql-install-4.png
[install 5]: /images/osm-data/postgresql-install-5.png
[install 6]: /images/osm-data/postgresql-install-6.png
[pgadmin3]: /images/osm-data/pgadmin3.png
[pgadmin3 start]: /images/osm-data/pgadmin3-start.png
[postgresql connect]: /images/osm-data/postgresql-connect.png
[enter password]: /images/osm-data/enter-password.png
[new database]: /images/osm-data/new-database.png
[new database form]: /images/osm-data/new-database-form.png
[sql button]: /images/osm-data/sql-button.png
[postgis command]: /images/osm-data/postgis-command.png
[shapefile loader]: /images/osm-data/shapefile-loader.png
[add shapefile]: /images/osm-data/add-shapefile.png
[qgis add postgis button]: /images/osm-data/add-postgis-button.png
[connection settings]: /images/osm-data/connection-settings.png
[your data layer]: /images/osm-data/your-data-layer.png







