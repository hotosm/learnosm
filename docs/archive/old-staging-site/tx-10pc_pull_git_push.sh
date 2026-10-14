#!/bin/bash
#
## This script updates LearnOSM staging site daily at 05:35hrs with any updates from Transifex
#
logger -t tx-10pc_pull_git_push.sh cron.info
#
FOLDER1=/home/dietpi/Github/Nick-Tallguy.github.io
FOLDER2=/home/dietpi/Github/Transifex_10pc
FOLDER3=/home/dietpi/Github/Transifex_10pc/translations
FOLDER4=/home/dietpi/Github/Nick-Tallguy.github.io/_posts
FOLDER5=/home/dietpi/Github/Transifex_10pc/translations-temp
FOLDERINTERIM=/home/dietpi/Github/Transifex_10pc/translations-interim
##
#  Update this instance from latest on Github
cd ${FOLDER1}
git pull
##
#  Pull the latest translations from Transifex to FOLDER3 (translations)
cd ${FOLDER2}
/home/dietpi/tx pull -a --minimum-perc 10
##
#### Remove the modules that are no longer updated
# rm ${FOLDER3}/0500-10-29*  #updated 05/05/2020
#
# Copy files for editing from FOLDER3 (translations) to FOLDER5 (translations-temp)
cp -u ${FOLDER3}/0[1-9]*.md  ${FOLDER5}/
cp -u ${FOLDER3}/19*.md  ${FOLDER5}/
##
#
### Move the files that do not need the script run on them
mv ${FOLDER5}/0170-* ${FOLDERINTERIM}/
mv ${FOLDER5}/0200-12-03-* ${FOLDERINTERIM}/
mv ${FOLDER5}/0200-12-05-* ${FOLDERINTERIM}/
mv ${FOLDER5}/0200-12-23* ${FOLDERINTERIM}/
mv ${FOLDER5}/0200-12-31-* ${FOLDERINTERIM}/
mv ${FOLDER5}/0450-* ${FOLDERINTERIM}/
mv ${FOLDER5}/0500-* ${FOLDERINTERIM}/
mv ${FOLDER5}/0900-12-04* ${FOLDERINTERIM}/
mv ${FOLDER5}/1900-12-31* ${FOLDERINTERIM}/
#
# Run edit script on files in FOLDER5 (translations-temp)
for f in ${FOLDER5}/*
do
sed -i '0,/^>/{/^>/d;}' $f
done
##
# Copy updated files from FOLDER 5 (temp) to FOLDERINTERIM ready to go to _posts
cp -u ${FOLDER5}/*.md ${FOLDERINTERIM}/
#
## Move the files from the interim folder to the language folder within  _posts
mv ${FOLDERINTERIM}/*_ar.md ${FOLDER4}/ar/
mv ${FOLDERINTERIM}/*_bn_BD.md ${FOLDER4}/bn_BD/
mv ${FOLDERINTERIM}/*_ca.md ${FOLDER4}/ca/
mv ${FOLDERINTERIM}/*_cs.md ${FOLDER4}/cs/
mv ${FOLDERINTERIM}/*_de.md ${FOLDER4}/de/
mv ${FOLDERINTERIM}/*_el.md ${FOLDER4}/el/
mv ${FOLDERINTERIM}/*_en.md ${FOLDER4}/en/
mv ${FOLDERINTERIM}/*_es.md ${FOLDER4}/es/
mv ${FOLDERINTERIM}/*_fa.md ${FOLDER4}/fa/
mv ${FOLDERINTERIM}/*_fr.md ${FOLDER4}/fr/
mv ${FOLDERINTERIM}/*_he.md ${FOLDER4}/he/
mv ${FOLDERINTERIM}/*_hr.md ${FOLDER4}/hr/
mv ${FOLDERINTERIM}/*_hu.md ${FOLDER4}/hu/
mv ${FOLDERINTERIM}/*_id.md ${FOLDER4}/id/
mv ${FOLDERINTERIM}/*_it.md ${FOLDER4}/it/
mv ${FOLDERINTERIM}/*_ja.md ${FOLDER4}/ja/
mv ${FOLDERINTERIM}/*_jv.md ${FOLDER4}/jv/
mv ${FOLDERINTERIM}/*_kn.md ${FOLDER4}/kn/
mv ${FOLDERINTERIM}/*_ko.md ${FOLDER4}/ko/
mv ${FOLDERINTERIM}/*_lb.md ${FOLDER4}/lb/
mv ${FOLDERINTERIM}/*_lt.md ${FOLDER4}/lt/
mv ${FOLDERINTERIM}/*_my.md ${FOLDER4}/my/
mv ${FOLDERINTERIM}/*_nb.md ${FOLDER4}/nb/
mv ${FOLDERINTERIM}/*_nl_NL.md ${FOLDER4}/nl_NL/
mv ${FOLDERINTERIM}/*_pl.md ${FOLDER4}/pl/
mv ${FOLDERINTERIM}/*_pt.md ${FOLDER4}/pt/
mv ${FOLDERINTERIM}/*_pt_BR.md ${FOLDER4}/pt_BR/
mv ${FOLDERINTERIM}/*_ru.md ${FOLDER4}/ru/
mv ${FOLDERINTERIM}/*_sl.md ${FOLDER4}/sl/
mv ${FOLDERINTERIM}/*_sq.md ${FOLDER4}/sq/
mv ${FOLDERINTERIM}/*_sr.md ${FOLDER4}/sr/
mv ${FOLDERINTERIM}/*_sw.md ${FOLDER4}/sw/
mv ${FOLDERINTERIM}/*_uk.md ${FOLDER4}/uk/
mv ${FOLDERINTERIM}/*_vi.md ${FOLDER4}/vi/
mv ${FOLDERINTERIM}/*_zh_CN.md ${FOLDER4}/zh_CN/
mv ${FOLDERINTERIM}/*_zh_TW.md ${FOLDER4}/zh_TW/
##
### change to repository home
cd ${FOLDER1}
git add *
git commit -a -m "latest updates from Transifex"
git push origin
#
## empty FOLDER5 so they are not edited again tomorrow
rm ${FOLDER5}/*
#
# 
