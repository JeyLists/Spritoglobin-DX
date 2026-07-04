<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="pl_PL">
<context>
    <name>ColorAnimationTimeline</name>
    <message>
        <location filename="../gui.py" line="796"/>
        <source>Color:</source>
        <translation>Kolor:</translation>
    </message>
    <message>
        <location filename="../gui.py" line="798"/>
        <source>Alpha:</source>
        <translation>Alfa:</translation>
    </message>
    <message>
        <location filename="../gui.py" line="932"/>
        <source>Global Palette Color: {0}</source>
        <extracomment>This is referring to which color in the global palette (not an official name) is affected by the current color animation.</extracomment>
        <translation>Kolor Globalnej Palety: {0}</translation>
    </message>
    <message>
        <location filename="../gui.py" line="935"/>
        <source>Persistent: {0}</source>
        <extracomment>Refers to whether a color animation continues to loop independently of the current sprite animation or not.</extracomment>
        <translation>Stała animacja: {0}</translation>
    </message>
    <message>
        <location filename="../gui.py" line="977"/>
        <source>Start/End Colors:</source>
        <extracomment>Refers to the starting color and the ending color of the current keyframe.</extracomment>
        <translation>Kolor Startowy/Końcowy:</translation>
    </message>
    <message>
        <location filename="../gui.py" line="1031"/>
        <source>Current Animation Layer ({0} Total)</source>
        <translation>Bieżąca Warstwa Animacji ({0} w sumie)</translation>
    </message>
</context>
<context>
    <name>FileImportWindow</name>
    <message>
        <location filename="../popups.py" line="31"/>
        <source>Import Object File</source>
        <extracomment>Window title.</extracomment>
        <translation>Importuj Obiekt</translation>
    </message>
    <message>
        <location filename="../popups.py" line="36"/>
        <source>Choose File</source>
        <translation>Wybierz Plik</translation>
    </message>
    <message>
        <location filename="../popups.py" line="41"/>
        <location filename="../popups.py" line="139"/>
        <source>No File Selected</source>
        <translation>Nie wybrano Pliku</translation>
    </message>
    <message>
        <location filename="../popups.py" line="44"/>
        <source>Alphabetize File Contents After Import</source>
        <translation>Sortuj zawartośc Pliku alfabetycznie po Imporcie</translation>
    </message>
    <message>
        <location filename="../popups.py" line="47"/>
        <source>Import File!</source>
        <translation>Importuj Plik!</translation>
    </message>
    <message>
        <location filename="../popups.py" line="82"/>
        <location filename="../popups.py" line="89"/>
        <source>Choose Object Archive</source>
        <extracomment>Window title.</extracomment>
        <translation>Wybierz Archiwum Obiektów</translation>
    </message>
    <message>
        <location filename="../popups.py" line="84"/>
        <source>Please choose an Object archive from {0}, or {1}.</source>
        <extracomment>&quot;{0}, or {1}&quot; appears as &quot;Paper Jam, Superstar Saga DX, or Bowser&apos;s Inside Story DX&quot; in-program (not exact titles but you get the idea)</extracomment>
        <translation>Proszę wybierz archiwum Obiektów z {0}, lub {1}.</translation>
    </message>
    <message>
        <location filename="../popups.py" line="123"/>
        <source>The file appears to be a valid Object archive, but the data appears to be corrupted or in an unrecognized format.</source>
        <extracomment>For uploading unsupported Obj files. The file had valid CA info, but all tests to check which game it&apos;s from have failed.</extracomment>
        <translation>Plik wygląda na prawidłowe archiwum Obiektów, lecz dane pliku zdają się być uszkodzone lub w nieznanym formacie.</translation>
    </message>
    <message>
        <location filename="../popups.py" line="125"/>
        <source>The file does not appear to be a valid Object archive.</source>
        <extracomment>For uploading files with a valid BG4 magic number, but no CA info. It&apos;s not an Obj archive.</extracomment>
        <translation>Plik nie zdaję się być prawidłowym archiwum Obiektów.</translation>
    </message>
    <message>
        <location filename="../popups.py" line="127"/>
        <source>The file does not appear to be a valid Object archive. Only Object archives from {0}, and {1} are currently supported.</source>
        <extracomment>For uploading any old data file that&apos;s not recognized by any of the program&apos;s tests. Clarifies which games are supported due to the fact that the uploader might be trying to import data from a game that&apos;s planned for future support, like Dream Team (as of writing this note).</extracomment>
        <translation>Plik nie zdaję się być prawidłowym archiwum Obiektów. Obecnie tylko achiwa z {0}, oraz {1} są wspierane.</translation>
    </message>
    <message>
        <location filename="../popups.py" line="131"/>
        <source>Failed to Import File</source>
        <extracomment>Window title.</extracomment>
        <translation>Nie udało się Importować Pliku</translation>
    </message>
    <message>
        <location filename="../popups.py" line="133"/>
        <source>The chosen file raised an error: &quot;{0}&quot;

{1}</source>
        <translation>Wybrany plik zgłosił błąd: &quot;{0}&quot;

{1}</translation>
    </message>
    <message>
        <location filename="../popups.py" line="147"/>
        <location filename="../popups.py" line="149"/>
        <source>BG4 Archive (Version {0}.{1})</source>
        <translation>BG4 Archive (Wersja {0}.{1})</translation>
    </message>
    <message>
        <location filename="../popups.py" line="157"/>
        <source>CellAnime Info</source>
        <extracomment>DO NOT TRANSLATE &quot;CellAnime&quot; AS IT IS AN INTERNAL NAME</extracomment>
        <translation>Informacja CellAnime</translation>
    </message>
    <message>
        <location filename="../popups.py" line="163"/>
        <location filename="../popups.py" line="170"/>
        <source>{0} Valid Entries, {1} Invalid Entries</source>
        <extracomment>Displays the amount of files that are full of CellAnime data, versus how many files are either unused or full of improper data.</extracomment>
        <translation>{0} Prawidłowych Wpisów, {1} Nieprawidłowych Wpisów</translation>
    </message>
</context>
<context>
    <name>GifExportWindow</name>
    <message>
        <location filename="../popups.py" line="194"/>
        <location filename="../popups.py" line="554"/>
        <source>Export File</source>
        <extracomment>Window title.</extracomment>
        <translation>Eksportuj plik</translation>
    </message>
    <message>
        <location filename="../popups.py" line="204"/>
        <location filename="../popups.py" line="205"/>
        <source>{0} fps</source>
        <extracomment>Framerate indicator, displays as &quot;60 / 50 fps&quot; and &quot;30 / 25 fps&quot; by default. Uses two numbers because GIFs have really weird speed limitations, unlike animated PNGs.</extracomment>
        <translation>{0} fps</translation>
    </message>
    <message>
        <location filename="../popups.py" line="253"/>
        <source>Export File!</source>
        <translation>Eksportuj plik!</translation>
    </message>
    <message>
        <location filename="../popups.py" line="297"/>
        <source>Framerate:</source>
        <translation>Klatki na sekundę:</translation>
    </message>
    <message>
        <location filename="../popups.py" line="302"/>
        <source>Color Animation:</source>
        <translation>Animacja koloru:</translation>
    </message>
    <message>
        <location filename="../popups.py" line="307"/>
        <source>Playback Speed:</source>
        <translation>Prędkość odtwarzania:</translation>
    </message>
    <message>
        <location filename="../popups.py" line="312"/>
        <source>Sprite Scale:</source>
        <translation>Skala Sprite&apos;a:</translation>
    </message>
    <message>
        <location filename="../popups.py" line="318"/>
        <source>Animation Sequence:</source>
        <extracomment>Refers to a sequence of animations to play in order.</extracomment>
        <translation>Sekwencja animacji:</translation>
    </message>
    <message>
        <location filename="../popups.py" line="323"/>
        <source>Animation:</source>
        <translation>Animacja:</translation>
    </message>
    <message>
        <location filename="../popups.py" line="328"/>
        <source>Loops:</source>
        <translation>Pętle:</translation>
    </message>
    <message>
        <location filename="../popups.py" line="488"/>
        <source>None</source>
        <extracomment>Used when a file has no color animations.</extracomment>
        <translation>Nic</translation>
    </message>
    <message>
        <location filename="../popups.py" line="513"/>
        <source>Animation {0}</source>
        <translation>Animacja {0}</translation>
    </message>
    <message>
        <location filename="../popups.py" line="515"/>
        <source>Animation {0} ({1} Loops)</source>
        <translation>Animacja {0} ({1} pętli)</translation>
    </message>
    <message>
        <location filename="../popups.py" line="734"/>
        <source>Export Successful</source>
        <extracomment>Window title.</extracomment>
        <translation>Eksport udany</translation>
    </message>
    <message>
        <location filename="../popups.py" line="735"/>
        <source>File {0} has been successfully exported!</source>
        <translation>Plik {0} został skutecznie eksportowany!</translation>
    </message>
</context>
<context>
    <name>GraphicsAnimationTimeline</name>
    <message>
        <location filename="../gui.py" line="566"/>
        <source>Show Animation Bounding Box</source>
        <extracomment>In BISDX, bounding boxes are defined in each animation and for the whole file as a 2D box around the graphic. This toggle shows and hides that.</extracomment>
        <translation>Pokaż pole ograniczenia animacji</translation>
    </message>
    <message>
        <location filename="../gui.py" line="669"/>
        <location filename="../gui.py" line="671"/>
        <location filename="../gui.py" line="675"/>
        <source>Sprite Part(s) Used: {0}</source>
        <translation>Częsć(i) Sprite&apos;a w użytku: {0}</translation>
    </message>
    <message>
        <location filename="../gui.py" line="674"/>
        <source>No Sprite Parts Used!</source>
        <translation>Brak użytych części Sprite&apos;a!</translation>
    </message>
    <message>
        <location filename="../gui.py" line="680"/>
        <location filename="../gui.py" line="684"/>
        <source>Transformation Matrix Used: {0}</source>
        <translation>Używany Macierz Transformacji: {0}</translation>
    </message>
    <message>
        <location filename="../gui.py" line="683"/>
        <source>No Transformation Matrix Used!</source>
        <translation>Brak użytego Macierza Transformacji!</translation>
    </message>
    <message>
        <location filename="../gui.py" line="690"/>
        <source>(Rotation is Inverted)</source>
        <extracomment>Under some circumstances, the affine matrix data for an image can be automatically modified so that its rotation appears inverted from the actual numbers. This appears in those circumstances, for clarity.</extracomment>
        <translation>(Obrót jest odwrotny)</translation>
    </message>
    <message>
        <location filename="../gui.py" line="705"/>
        <source>X Scale: {0}</source>
        <extracomment>Part of affine matrix data.</extracomment>
        <translation>Skala X: {0}</translation>
    </message>
    <message>
        <location filename="../gui.py" line="707"/>
        <source>X Shear: {0}</source>
        <extracomment>Part of affine matrix data.</extracomment>
        <translation>Ścięcie X: {0}</translation>
    </message>
    <message>
        <location filename="../gui.py" line="709"/>
        <source>X Position: {1}</source>
        <extracomment>Part of affine matrix data.</extracomment>
        <translation>Pozycja X: {1}</translation>
    </message>
    <message>
        <location filename="../gui.py" line="711"/>
        <source>Y Shear: {0}</source>
        <extracomment>Part of affine matrix data.</extracomment>
        <translation>Ścięcie Y: {0}</translation>
    </message>
    <message>
        <location filename="../gui.py" line="713"/>
        <source>Y Scale: {0}</source>
        <extracomment>Part of affine matrix data.</extracomment>
        <translation>Skala Y: {0}</translation>
    </message>
    <message>
        <location filename="../gui.py" line="715"/>
        <source>Y Position: {1}</source>
        <extracomment>Part of affine matrix data.</extracomment>
        <translation>Pozycja Y: {1}</translation>
    </message>
</context>
<context>
    <name>MainWindow</name>
    <message>
        <location filename="../main.py" line="201"/>
        <source>Update Check Failed</source>
        <extracomment>Window title.</extracomment>
        <translation>Nieudana Kontrola Aktualizacji</translation>
    </message>
    <message>
        <location filename="../main.py" line="202"/>
        <source>An error occured while checking for updates:

{0}</source>
        <translation>Wystąpił błąd podczas spawdzania aktualizacji:

{0}</translation>
    </message>
    <message>
        <location filename="../main.py" line="217"/>
        <source>Don&apos;t worry about your program settings, those will be carried over between versions!</source>
        <translation>Nie martw się o ustawieniach programu, one są zapisane między wersjami.</translation>
    </message>
    <message>
        <location filename="../main.py" line="220"/>
        <source>New Update Available</source>
        <extracomment>Window title.</extracomment>
        <translation>Dostępna jest nowa aktualizacja</translation>
    </message>
    <message>
        <location filename="../main.py" line="221"/>
        <source>There&apos;s a new update available: {0}
---
{1}
---
Download it on {2}</source>
        <translation>Dostępna jest nowa aktualizacja: {0}
---
{1}
---
Ściągnij ją na stronie {2}</translation>
    </message>
    <message>
        <location filename="../main.py" line="227"/>
        <source>Remind Me Later</source>
        <translation>Prypomnij mi później</translation>
    </message>
    <message>
        <location filename="../main.py" line="228"/>
        <source>Skip This Version</source>
        <translation>Pomiń tą wersję</translation>
    </message>
    <message>
        <location filename="../main.py" line="241"/>
        <source>No New Updates</source>
        <extracomment>Window title.</extracomment>
        <translation>Nie ma nowych aktualizacji</translation>
    </message>
    <message>
        <location filename="../main.py" line="242"/>
        <source>You&apos;re all caught up! There are no new updates to download.</source>
        <translation>Już jesteś nadążony! Nie masz więcej nowych aktualizacji to ściągnięcia.</translation>
    </message>
    <message>
        <location filename="../main.py" line="261"/>
        <source>&amp;File</source>
        <extracomment>The &quot;&amp;&quot; symbol will underline a letter and cause the option to be selectable by pressing the letter on your keyboard while holding Alt. Please ensure all letters that are given this property within each submenu and in the toolbar itself are unique, so all options can be selected this way.</extracomment>
        <translation>&amp;Plik</translation>
    </message>
    <message>
        <location filename="../main.py" line="264"/>
        <source>&amp;Open File</source>
        <extracomment>The &quot;&amp;&quot; symbol will underline a letter and cause the option to be selectable by pressing the letter on your keyboard while holding Alt. Please ensure all letters that are given this property within each submenu and in the toolbar itself are unique, so all options can be selected this way.</extracomment>
        <translation>&amp;Otwórz Plik</translation>
    </message>
    <message>
        <location filename="../main.py" line="270"/>
        <source>&amp;Close File</source>
        <extracomment>The &quot;&amp;&quot; symbol will underline a letter and cause the option to be selectable by pressing the letter on your keyboard while holding Alt. Please ensure all letters that are given this property within each submenu and in the toolbar itself are unique, so all options can be selected this way.</extracomment>
        <translation>&amp;Zamknij Plik</translation>
    </message>
    <message>
        <location filename="../main.py" line="278"/>
        <source>Quick &amp;Export Animation</source>
        <extracomment>The &quot;&amp;&quot; symbol will underline a letter and cause the option to be selectable by pressing the letter on your keyboard while holding Alt. Please ensure all letters that are given this property within each submenu and in the toolbar itself are unique, so all options can be selected this way.</extracomment>
        <translation>Szybki &amp;Eksport Animacji</translation>
    </message>
    <message>
        <location filename="../main.py" line="284"/>
        <source>Export Animation &amp;Sequence</source>
        <extracomment>The &quot;&amp;&quot; symbol will underline a letter and cause the option to be selectable by pressing the letter on your keyboard while holding Alt. Please ensure all letters that are given this property within each submenu and in the toolbar itself are unique, so all options can be selected this way.</extracomment>
        <translation>Eksportuj &amp;Sekwencje Animacji</translation>
    </message>
    <message>
        <location filename="../main.py" line="292"/>
        <source>&amp;Quit</source>
        <extracomment>The &quot;&amp;&quot; symbol will underline a letter and cause the option to be selectable by pressing the letter on your keyboard while holding Alt. Please ensure all letters that are given this property within each submenu and in the toolbar itself are unique, so all options can be selected this way.</extracomment>
        <translation>&amp;Wyjdź</translation>
    </message>
    <message>
        <location filename="../main.py" line="299"/>
        <source>&amp;Options</source>
        <extracomment>The &quot;&amp;&quot; symbol will underline a letter and cause the option to be selectable by pressing the letter on your keyboard while holding Alt. Please ensure all letters that are given this property within each submenu and in the toolbar itself are unique, so all options can be selected this way.</extracomment>
        <translation>&amp;Opcje</translation>
    </message>
    <message>
        <location filename="../main.py" line="302"/>
        <source>&amp;Language</source>
        <extracomment>The &quot;&amp;&quot; symbol will underline a letter and cause the option to be selectable by pressing the letter on your keyboard while holding Alt. Please ensure all letters that are given this property within each submenu and in the toolbar itself are unique, so all options can be selected this way.</extracomment>
        <translation>&amp;Język</translation>
    </message>
    <message>
        <location filename="../main.py" line="310"/>
        <source>&lt;System Language&gt;</source>
        <translation>&lt;System Język&gt;</translation>
    </message>
    <message>
        <location filename="../main.py" line="323"/>
        <source>&amp;Framerate</source>
        <extracomment>The &quot;&amp;&quot; symbol will underline a letter and cause the option to be selectable by pressing the letter on your keyboard while holding Alt. Please ensure all letters that are given this property within each submenu and in the toolbar itself are unique, so all options can be selected this way.</extracomment>
        <translation>&amp;Framerate</translation>
    </message>
    <message>
        <location filename="../main.py" line="329"/>
        <location filename="../main.py" line="330"/>
        <source>{0} fps</source>
        <extracomment>Framerate indicator, displays as &quot;60 fps&quot; and &quot;30 fps&quot; by default.</extracomment>
        <translation>{0} fps</translation>
    </message>
    <message>
        <location filename="../main.py" line="344"/>
        <source>&amp;Mute Audio</source>
        <extracomment>The &quot;&amp;&quot; symbol will underline a letter and cause the option to be selectable by pressing the letter on your keyboard while holding Alt. Please ensure all letters that are given this property within each submenu and in the toolbar itself are unique, so all options can be selected this way.</extracomment>
        <translation>&amp;Wycisz Dźwięk</translation>
    </message>
    <message>
        <location filename="../main.py" line="350"/>
        <source>&amp;Auto Update Checks</source>
        <extracomment>The &quot;&amp;&quot; symbol will underline a letter and cause the option to be selectable by pressing the letter on your keyboard while holding Alt. Please ensure all letters that are given this property within each submenu and in the toolbar itself are unique, so all options can be selected this way.</extracomment>
        <translation>&amp;Automatyczne Sprawdzanie Aktualizacji</translation>
    </message>
    <message>
        <location filename="../main.py" line="356"/>
        <source>&amp;Edit Theme</source>
        <extracomment>The &quot;&amp;&quot; symbol will underline a letter and cause the option to be selectable by pressing the letter on your keyboard while holding Alt. Please ensure all letters that are given this property within each submenu and in the toolbar itself are unique, so all options can be selected this way.</extracomment>
        <translation>&amp;Edytuj Motyw</translation>
    </message>
    <message>
        <location filename="../main.py" line="369"/>
        <source>&amp;Help</source>
        <extracomment>The &quot;&amp;&quot; symbol will underline a letter and cause the option to be selectable by pressing the letter on your keyboard while holding Alt. Please ensure all letters that are given this property within each submenu and in the toolbar itself are unique, so all options can be selected this way.</extracomment>
        <translation>Po&amp;moc</translation>
    </message>
    <message>
        <location filename="../main.py" line="373"/>
        <source>&amp;Check for Updates</source>
        <extracomment>The &quot;&amp;&quot; symbol will underline a letter and cause the option to be selectable by pressing the letter on your keyboard while holding Alt. Please ensure all letters that are given this property within each submenu and in the toolbar itself are unique, so all options can be selected this way.</extracomment>
        <translation>&amp;Sprawdź aktualizacje</translation>
    </message>
    <message>
        <location filename="../main.py" line="472"/>
        <source>Show Object Bounding Box</source>
        <extracomment>In BISDX, bounding boxes are defined in each animation and for the whole file as a 2D box around the graphic. This toggle shows and hides that.</extracomment>
        <translation>Pokaż pole ograniczenia Obiektu</translation>
    </message>
    <message>
        <location filename="../main.py" line="480"/>
        <source>Color Animations:</source>
        <translation>Animacje Koloru:</translation>
    </message>
    <message>
        <location filename="../main.py" line="498"/>
        <source>Sprite Animation</source>
        <translation>Animacje Sprite&apos;a</translation>
    </message>
    <message>
        <location filename="../main.py" line="500"/>
        <source>Single Color Animation</source>
        <extracomment>&quot;Single&quot; is an adjective of &quot;Animation&quot; rather than &quot;Color.&quot; It refers to the fact that each sprite animation has a Single Animation for Color, rather than the Animation being of a Single Color.</extracomment>
        <translation>Pojedyncza Animacja Koloru</translation>
    </message>
    <message>
        <location filename="../main.py" line="501"/>
        <source>Global Color Animation</source>
        <translation>Globalna Animacja Koloru</translation>
    </message>
    <message>
        <location filename="../main.py" line="516"/>
        <source>Current Sprite Part Set:</source>
        <translation>Biężący Zestaw Części Sprite&apos;a:</translation>
    </message>
    <message>
        <location filename="../main.py" line="541"/>
        <source>Current Sprite Part:</source>
        <translation>Bieżąca część Sprite&apos;a:</translation>
    </message>
    <message>
        <location filename="../main.py" line="630"/>
        <source>Current Object:</source>
        <translation>Bieżący Obiekt:</translation>
    </message>
    <message>
        <location filename="../main.py" line="635"/>
        <source>Animations:</source>
        <translation>Animacje:</translation>
    </message>
    <message>
        <location filename="../main.py" line="722"/>
        <source>No Object Data</source>
        <extracomment>Window title.</extracomment>
        <translation>Brak Danych Obiektu</translation>
    </message>
    <message>
        <location filename="../main.py" line="723"/>
        <source>There is no currently loaded Object data! Please load an Object archive before attempting to export a file.</source>
        <translation>Nie ma żadnych aktualnie załadowanych danych Obiektu! Proszę załaduj archiwum Obiektów zanim spóbujesz eksportować plik.</translation>
    </message>
    <message>
        <location filename="../main.py" line="793"/>
        <source>Mario &amp; Luigi: Superstar Saga</source>
        <extracomment>If the game&apos;s title was not translated to your language and region, do not translate.</extracomment>
        <translation></translation>
    </message>
    <message>
        <location filename="../main.py" line="795"/>
        <source>Mario &amp; Luigi: Partners in Time</source>
        <extracomment>If the game&apos;s title was not translated to your language and region, do not translate.</extracomment>
        <translation></translation>
    </message>
    <message>
        <location filename="../main.py" line="797"/>
        <source>Mario &amp; Luigi: Bowser&apos;s Inside Story</source>
        <extracomment>If the game&apos;s title was not translated to your language and region, do not translate.</extracomment>
        <translation></translation>
    </message>
    <message>
        <location filename="../main.py" line="799"/>
        <source>Mario &amp; Luigi: Dream Team</source>
        <extracomment>If the game&apos;s title was not translated to your language and region, do not translate.</extracomment>
        <translation>Mario &amp; Luigi: Dream Team Bros.</translation>
    </message>
    <message>
        <location filename="../main.py" line="801"/>
        <source>Mario &amp; Luigi: Paper Jam</source>
        <extracomment>If the game&apos;s title was not translated to your language and region, do not translate.</extracomment>
        <translation>Mario &amp; Luigi: Paper Jam Bros.</translation>
    </message>
    <message>
        <location filename="../main.py" line="803"/>
        <source>Mario &amp; Luigi: Superstar Saga + Bowser&apos;s Minions</source>
        <extracomment>If the game&apos;s title was not translated to your language and region, do not translate.</extracomment>
        <translation></translation>
    </message>
    <message>
        <location filename="../main.py" line="805"/>
        <source>Mario &amp; Luigi: Bowser&apos;s Inside Story + Bowser Jr.&apos;s Journey</source>
        <extracomment>If the game&apos;s title was not translated to your language and region, do not translate.</extracomment>
        <translation></translation>
    </message>
    <message>
        <location filename="../main.py" line="810"/>
        <source>True</source>
        <extracomment>Can be &quot;True&quot; or &quot;Yes&quot; in your language, whichever seems more appropriate to you.</extracomment>
        <translation>Prawda</translation>
    </message>
    <message>
        <location filename="../main.py" line="812"/>
        <source>False</source>
        <extracomment>Can be &quot;False&quot; or &quot;No&quot; in your language, whichever seems more appropriate to you.</extracomment>
        <translation>Fałsz</translation>
    </message>
    <message>
        <location filename="../main.py" line="814"/>
        <source>None</source>
        <extracomment>Used whenever there are no options to choose from in a list that is usually populated.</extracomment>
        <translation>Nic</translation>
    </message>
    <message>
        <location filename="../main.py" line="877"/>
        <source>Privacy Statement</source>
        <extracomment>Use Github&apos;s official terminology for your language&apos;s Privacy Statement if it exists. If not, do not translate.</extracomment>
        <translation>Privacy Statement</translation>
    </message>
    <message>
        <location filename="../main.py" line="887"/>
        <source>Automatic Update Checking</source>
        <extracomment>Window title.</extracomment>
        <translation>Automatyczna Kontrola Aktualizacji</translation>
    </message>
    <message>
        <location filename="../main.py" line="888"/>
        <source>Would you like to allow Spritoglobin DX to automatically connect to the internet and check for updates?

This can always be changed later in the options.

Note: This will make a request to GitHub&apos;s servers, which will receive your IP address and process it as per their {0}.</source>
        <translation>Czy chciałbyś zezwolić Spritoglobin DX na automatyczne połączączenie do internetu I sprawdzanie aktualizacji?

Zawszę możesz to zmienić w opcjach.

Uwaga: Ten proces składa wniosek do serwerów Github, które dostaną i przetworzą twój adres IP według ich {0}.</translation>
    </message>
    <message>
        <location filename="../main.py" line="1050"/>
        <source>Color Mode: {0}</source>
        <translation>Tryb Koloru: {0}</translation>
    </message>
    <message>
        <location filename="../main.py" line="1400"/>
        <source>Graphics Buffer Data: {0}h - {1}h</source>
        <translation>Dane Buforu Grafiki: {0}h - {1}h</translation>
    </message>
    <message>
        <location filename="../main.py" line="1407"/>
        <source>0 (Small)</source>
        <translation>0 (Mały)</translation>
    </message>
    <message>
        <location filename="../main.py" line="1407"/>
        <source>1 (Medium)</source>
        <translation>1 (Średni)</translation>
    </message>
    <message>
        <location filename="../main.py" line="1407"/>
        <source>2 (Large)</source>
        <translation>2 (Duży)</translation>
    </message>
    <message>
        <location filename="../main.py" line="1407"/>
        <source>3 (Extra Large)</source>
        <translation>3 (Bardzo Duży)</translation>
    </message>
    <message>
        <location filename="../main.py" line="1408"/>
        <source>0 (Square)</source>
        <translation>0 (Kwadrat)</translation>
    </message>
    <message>
        <location filename="../main.py" line="1408"/>
        <source>1 (Wide)</source>
        <translation>1 (Szeroki)</translation>
    </message>
    <message>
        <location filename="../main.py" line="1408"/>
        <source>2 (Tall)</source>
        <translation>2 (Wysoki)</translation>
    </message>
    <message>
        <location filename="../main.py" line="1423"/>
        <source>Size: {0}</source>
        <translation>Rozmiar: {0}</translation>
    </message>
    <message>
        <location filename="../main.py" line="1425"/>
        <source>Shape: {0}</source>
        <translation>Kształt: {0}</translation>
    </message>
    <message>
        <location filename="../main.py" line="1428"/>
        <source>({0}px, {1}px)</source>
        <extracomment>Measures the size in pixels of a graphic.</extracomment>
        <translation>({0}px, {1}px)</translation>
    </message>
    <message>
        <location filename="../main.py" line="1431"/>
        <source>H. Flip: {0}</source>
        <extracomment>Shortening of &quot;Horizontal flip.&quot; Keep this string as short as possible as there isn&apos;t much horizontal space here.</extracomment>
        <translation>Obrót Poziomy:{0}</translation>
    </message>
    <message>
        <location filename="../main.py" line="1434"/>
        <source>V. Flip: {0}</source>
        <extracomment>Shortening of &quot;Vertical flip.&quot; Keep this string as short as possible as there isn&apos;t much horizontal space here.</extracomment>
        <translation>Obrót Pionowy: {0}</translation>
    </message>
    <message>
        <location filename="../main.py" line="1436"/>
        <source>Offset: ({0}px, {1}px)</source>
        <translation>Offset: ({0}px, {1}px)</translation>
    </message>
    <message>
        <location filename="../main.py" line="1457"/>
        <source>Renderer: {0}</source>
        <extracomment>Refers to the current rendering payload that is sent to the PICA200 rendering pipeline on the 3DS.</extracomment>
        <translation>Renderer: {0}</translation>
    </message>
</context>
<context>
    <name>ProgramThemeEditor</name>
    <message>
        <location filename="../popups.py" line="758"/>
        <source>Edit Theme</source>
        <extracomment>Window title.</extracomment>
        <translation>Edytuj Motyw</translation>
    </message>
    <message>
        <location filename="../popups.py" line="784"/>
        <source>Recolor Icons According to Theme</source>
        <extracomment>Refers to whether or not the icons will be automatically recolored based on the four main theme colors the user has chosen.</extracomment>
        <translation>Zmień Kolor Ikon według Motywu</translation>
    </message>
    <message>
        <location filename="../popups.py" line="879"/>
        <source>Apply Theme!</source>
        <translation>Zastosuj Motyw!</translation>
    </message>
    <message>
        <location filename="../popups.py" line="891"/>
        <source>Theme Settings:</source>
        <translation>Ustawienia Motywu:</translation>
    </message>
    <message>
        <location filename="../popups.py" line="896"/>
        <source>Theme Presets:</source>
        <extracomment>Referring to buttons you can click to automatically set your theme to a few pre-determined colors.</extracomment>
        <translation>Ustalone Motywy:</translation>
    </message>
    <message>
        <location filename="../popups.py" line="900"/>
        <source>Preview:</source>
        <translation>Podgląd:</translation>
    </message>
</context>
</TS>
