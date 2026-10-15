---
layout: doc
title: BasicAirData GPS 기록기
permalink: /ko/mobile-mapping/basicairdata-gpslogger/
lang: ko
category: mobile-mapping
---

BasicAirData GPS 기록기
=======================

> Reviewed 2021-06-12

![BasicAirData-GPSLogger-002][]

BasicAirData GPS 기록기는 휴대폰의 위치와 이동 경로를 기록하는 앱입니다. BasicAirData는 단순하고 가벼우며, 전력 절약 기능까지 갖추고 있습니다. 특히, 설정에서 'EGM96 자동 고도 보정' 기능을 켠다면 고도 측정 기능이 매우 정밀해집니다. 이 앱을 이용하면 이동 경로를 저장할 수도 있고, 경로 목록에서 바로 원하는 외부 뷰어를 켜서 이동 경로를 열람할 수도 있습니다. 경로는 KML, GPX, TXT 포맷으로 공유할 수 있습니다.

이 앱은 안드로이드에서 이용할 수 있으며, 자유·오픈 소스입니다.

다운로드는 [구글 플레이](https://play.google.com/store/apps/details?id=eu.basicairdata.graziano.gpslogger) 스토어에서 할 수 있습니다.<br>
아니면 GPSLogger의 [깃허브 리포지토리](https://github.com/BasicAirData/GPSLogger/tree/master/apk)에서 APK 파일을 받아도 됩니다.

기능
--------

![BasicAirData-GPSLogger-000][]

* 궤적 기록하기 - 해당 앱에는 지도가 내장되어 있지 않습니다
* 현대적인 UI와 배터리를 적게 먹는 다크 테마, 손쉽게 이용할 수 있는 인터페이스
* 앱을 켠 채로 혹은 다른 앱을 사용하는 중(백그라운드)에도 기록 가능(안드로이드 6 이상에서는 모든 배터리 감시 기능과 해당 앱의 배터리 소모량을 최적화하는 기능을 꺼야 합니다)
* 기록 중에 관심 지점 추가하기
* GPS 정보 시각화
* 수동 고도 조정 기능(전반적인 오프셋 추가 가능)
* NGA EGM96 지구 지오이드 모형에 기반한 자동 고도 조정 기능(설정에서 별도로 활성화해야 합니다)
* 실시간 궤적 통계
* 기록한 모든 궤적을 앱 내부에서 볼 수 있음
* 아무 KML/GPX 뷰어나 설치해 궤적 목록에서 바로 궤적을 시각화할 수 있음
* 기기의 /GPSLogger 폴더로 궤적 내보내기(KML, GPX, TXT 지원)
* 이메일, 드롭박스, 구글 드라이브, FTP 등으로 궤적 공유하기(KML, GPX, TXT 형식)
* 미터법, 미국 단위계, 해양 단위계 중 원하는 것을 골라 쓸 수 있음

기초적인 사용법
-----------

![BasicAirData-GPSLogger-001][]

GPS를 활성화하지 않았다면 먼저 활성화하세요. 그런 다음 실외로 이동해 GPS 기록기를 시작하세요.

1. 인공위성에서 신호를 받는 과정이 고정(fix)될 때까지 기다립니다. 고정이 완료되면 __GPS FIX__ 탭에 고정된 좌표가 표시되기 시작합니다. 이 시점에서 신호가 안정될 수 있도록 다음 단계를 진행하기 전에 (가능하다면) 적어도 1분 이상 기다려야 합니다.
2. 하단의 __기록__ 버튼을 클릭해 궤적 기록을 시작합니다. 기록이 시작되면 버튼이 빨간색으로 바뀝니다. 여기서 기록 버튼을 클릭하면 언제든지 녹화를 일시 중지하거나 재개할 수 있습니다. 기록된 궤적 상의 점 개수가 버튼 상단에 표시됩니다.
__궤적__ 탭으로 이동하면 실시간으로 이동 경로 통계를 볼 수 있습니다.
3. 기록을 마치려면 __정지__ 버튼을 클릭해 활성화된 궤적을 마무리합니다. 대화 상자가 나타나면 __확인__을 클릭합니다.
4. 방금 기록한 궤적을 찾으려면 __궤적 목록__ 탭으로 이동하세요. 궤적을 누르면 메뉴가 나타납니다. 여러 가지 방법으로 궤적을 공유하거나, 설치된 외부 궤적 뷰어를 사용해 궤적을 보거나, 궤적의 세부 정보를 편집하거나, 스마트폰의 /GPS Logger 폴더로 궤적을 내보내거나, 궤적 목록에서 궤적을 삭제할 수 있습니다. 내보내기에 사용되는 포맷은 설정 화면에서 구성할 수 있습니다.

Import of GPX tracks in OpenStreetMap Editor
--------------------------------------------

When you are done collecting field data, you may import the GPX tracks for use in JOSM, iD or another OpenStreetMap Editor.
You can use this simple 2-step procedure:

1. Save the GPX track on your Personal Computer in one of the following ways:
* Go on the GPS Logger tracklist, tap on the desired track and then click on __Export__; the GPX file will be created and saved on the /GPSLogger folder of your Android device (make sure that GPX format is enabled on the settings screen). Then connect the phone with your PC using a USB cable and move (or copy) your GPX tracks on your PC using the File Manager;
* As alternative, you can use the __Share__ feature to send the file to the PC (you can do it via e-mail, FTP, or using many Cloud Services). The sharing possibilities depend on the third-party apps installed on your Android Device;
2. Import the GPX track into your OpenStreetMap Editor: using the GPX tracks with the JOSM and iD editors is easy by dragging the files and dropping them into the application (or the browser tab, for iD).

Official Documentation
----------------------

- For further information about this app you can read [this article](http://www.basicairdata.eu/projects/android/android-gps-logger/).<br>
- [Here](http://www.basicairdata.eu/projects/android/android-gps-logger/getting-started-guide-for-gps-logger/) you can find a Getting Started Guide and an Overview of the App Settings.<br>
- Problems during use or configuration of GPS Logger? Read the [Frequently Asked Questions](https://github.com/BasicAirData/GPSLogger/blob/master/readme.md#frequently-asked-questions) page!

[BasicAirData-GPSLogger-002]:  /images/mobile-mapping/basicairdata-gpslogger_002.en.jpg
[BasicAirData-GPSLogger-000]:  /images/mobile-mapping/basicairdata-gpslogger_000.en.jpg
[BasicAirData-GPSLogger-001]:  /images/mobile-mapping/basicairdata-gpslogger_001.en.jpg