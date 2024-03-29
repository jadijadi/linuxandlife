---
layout: article
chapter: مباحث پیشرفته 
order: 22
title: دستورات معمول خط فرمان
---

همانطور که [گفتیم](/chapters/commandline_basics.html)، خط فرمان لینوکس به شما اجازه می‌دهد دستوراتی را از صفحه کلید اجرا کنید و به فایل‌ها دسترسی داشته باشید. تعداد دستورات لینوکس بسیار زیاد است و هر دستور هم تنظیمات بسیار متنوعی دارد اما آن چیزهایی که معمولا استفاده می‌شوند را می‌شود در یکی دو درس گنجاند. فراموش نکنید که همانطور که در درس قبل خوانده‌اید، استفاده از خط فرمان چیزی است شبیه به بالا زدن کاپوت ماشین که هم به ما قدرت بیشتری در درک ساز و کار خودرو می‌دهد و هم ممکن است باعث خراب کردن موتور شود. اما شجاع باشید و به خودتان یادآوری کنید که انسان با تلاش و احیانا اشتباه کردن چیز یاد می گیرد و دنیای لینوکس دنیایی بسیار مهربان است و پر از آدم‌هایی که دوست دارند اشتباهات شما را با خوشحالی اصلاح کنند. این دنیا و اشتباه کردن در آن می‌تواند دریچه‌ای باشد برای درک اینکه بدون اشتباه کردن نمی‌شود چیزی را یاد گرفت پس همیشه یادتان نگه‌دارید که اگر کسی در مورد شما اشتباهی انجام داد،‌ یعنی دارد تلاش می‌کند در مورد شما چیزی یاد بگیرد. 

حالا بگذارید نگاهی به معمول‌ترین دستورات خط فرمان بیندازیم.

# کار با فایل‌ها و دایرکتوری‌ها
## ls برای دیدن فهرست دایرکتوری‌ها و فایل‌ها
در هر جایی که باشید، با زدن دستور ls می توانید ببینید چه فایل‌ها و دایرکتوری‌هایی در آنجا وجود دارد. برای مثال:
<pre>
jadi@wonderland:~$ ls
1.txt  digits  donot.read.me  empty  mystery  project
</pre>

همانطور که می‌بینید خواندن این خروجی کمی سخت است و اطلاعات چندانی هم منتقل نمی‌کند. پس بهتر است از سوییچ‌ها استفاده کنیم. سوییچ‌های دستورات لینوکس معمولا بعد از - یا -- نوشته می‌شوند. مثلا برای دیدن خروجی طولانی‌ (long) باید از سوییچ l استفاده کنم:

<pre>
jadi@wonderland:~$ ls -l
total 20
-rw-rw-r-- 1 jadi jadi   64 Jul  6 15:50 1.txt
-rw-rw-r-- 1 jadi jadi   21 Jul  6 15:50 digits
-rw-rw-r-- 1 jadi jadi   17 Jul  6 15:50 donot.read.me
-rw-rw-r-- 1 jadi jadi    0 Jul  6 15:50 empty
drwxrwxr-x 2 jadi jadi 4096 Jul  6 15:51 mystery
drwxrwxr-x 2 jadi jadi 4096 Jul  6 15:51 project
</pre>

حالا اطلاعات بیشتری در مورد هر فایل و دایرکتوری پیدا می‌کنیم. مثلا حجم هر فایل، تاریخ ساخته شدن آن و مالک و دسترسی‌ها (در این مورد بعدا بیشتر توضیح خواهیم داد). همچنین حرف d در اول خط نمایشگر این است که این خط مربوط به یک دایرکتوری است. ترکیب سوییچی بسیار مرسوم در گرفتن دایرکتوری ltrh است؛ l برای نمایش طولانی، h برای نمایش آدم‌وار (اول کلمه human که باعث می‌شود مثلا به جای حجم 4096 با عبارت آدم‌وار 4k روبرو شویم) و tr برای تنظیم بر اساس «معکوس زمان» یا همان time reversed که جدیدترین فایل‌ها را پایین نمایش می‌دهد. چرا این دستور مهم است؟ چون می‌تواند به شکلی آدم‌وار به شما بگوید که آخرین فایل‌هایی که در یک دایرکتوری تغییر کرده‌اند چه بوده‌اند. مثلا در بسیاری از مواقع برای کشف اینکه آیا لاگی تغییر کرده یا نه از چنین دستوری استفاده می‌کنیم:

<pre>
jadi@wonderland:~$ ls -ltrh /var/log
total 1.5M
drwxr-xr-x 2 root      root 4.0K Apr 12 09:03 dist-upgrade
-rw-rw---- 1 root      utmp    0 Apr 17 01:32 btmp
-rw-r----- 1 root      adm    59 Apr 17 01:32 dmesg.1.gz
-rw-r--r-- 1 root      root  61K Apr 17 01:33 bootstrap.log
drwxr-xr-x 2 root      root 4.0K Jul  5 09:16 fsck
drwxr-xr-x 2 root      root 4.0K Jul  5 09:17 apt
drwxr-xr-x 3 root      root 4.0K Jul  5 09:32 installer
drwxr-xr-x 2 landscape root 4.0K Jul  5 09:32 landscape
-rw-r----- 1 root      adm   86K Jul  5 09:32 dmesg.0
-rw-r--r-- 1 root      root  32K Jul  5 09:53 faillog
-rw-r--r-- 1 root      root  20K Jul  5 10:01 alternatives.log
drwxr-xr-x 2 root      root 4.0K Jul  5 11:10 upstart
-rw-r--r-- 1 root      root 236K Jul  5 11:10 udev
-rw-r----- 1 root      adm   86K Jul  5 11:10 dmesg
-rw-r--r-- 1 root      root  179 Jul  5 11:10 boot.log
-rw-r--r-- 1 root      root  12K Jul  5 17:17 aptitude
drwxr-xr-x 2 root      root 4.0K Jul  6 06:42 unattended-upgrades
-rw-r----- 1 syslog    adm  256K Jul  6 06:42 kern.log
-rw-r--r-- 1 root      root 375K Jul  6 06:43 dpkg.log
-rw-rw-r-- 1 root      utmp  14K Jul  6 15:47 wtmp
-rw-rw-r-- 1 root      utmp 286K Jul  6 15:47 lastlog
-rw-r----- 1 syslog    adm   16K Jul  6 15:49 auth.log
-rw-r----- 1 syslog    adm  271K Jul  6 15:56 syslog
</pre>

<p class="bg-info">
<strong>توجه.</strong> سوییچ‌ها را در طول زمان حفظ خواهید شد! نگران نباشید.
</p>
## pwd برای دیدن مسیر جاری 

دستوری بسیار ساده که به شما می‌گوید در کجای جهان ایستاده‌اید:

<pre>
jadi@wonderland:/tmp$ pwd
/tmp
</pre>

اکثر توزیع‌ها از جمله اوبونتویی که در این درس استفاده شده، در خط فرمان مسیری که در آن هستید را به شما نشان می‌دهند اما دستور pwd هم راه حل خوبی است برای اینکه به شما بگوید در حال حاضر در کدام دایرکتوری هستید. در لینوکس شما با دستوراتی مانند cd که چند لحظه دیگر آن را خواهیم دید می‌توانید در دایرکتوری ها حرکت کنید و pwd مانند یک جی.پی.اس. عالی در هر لحظه می‌تواند جای شما را به شما گزارش دهد. همانطور که [قبلا هم گفته بودم](/chapters/directory_structure.html) تمام فایل‌های لینوکس در یک ساختار درختی از دایرکتوری‌ها چیده شده‌اند و شما در هر لحظه در یکی از این شاخه‌ها ایستاده‌اید. یادتان هست که شاخه‌ها از / که به آن روت می گفتیم شروع می شوند و تا هر کجایی که شما دایرکتوری‌های تو در تو بسازید ادامه پیدا می‌کنند.

## cd برای حرکت در دایرکتوری ها
در بخش [ساختار فایل‌های لینوکس](/chapters/directory_structure.html) یادگرفتیم که در لینوکس همه فایل‌ها در یک ساختار درختی از دایرکتوری‌ها قرار دارند که از دایرکتوری ریشه که آن را با / نشان می‌دهیم شروع شده و به سمت پایین ادامه می‌یابد. برای حرکت در این دایرکتوری‌ها از دستور cd که مخفف change directory است استفاده می‌کنیم. در جلوی این دستور باید مسیر جایی که می‌خواهیم به آنجا برویم را مشخص کنیم:

<pre>
jadi@wonderland:~$ cd /
jadi@wonderland:/$ 
</pre> 

همانطور که می‌بینید کاربر در ابتدا در خانه خود بوده (که همیشه آن را با ~ نمایش می‌دهیم) و با زدن / در جلوی دستور سی دی، به دایرکتوری ریشه رفته است. در مرحله بعد این امکان را داریم که وارد یکی دیگر از دایرکتوری‌ها شویم:

<pre>
jadi@wonderland:/$ cd log
-bash: cd: log: No such file or directory
jadi@wonderland:/$ cd var
jadi@wonderland:/var$ cd log
jadi@wonderland:/var/log$ ls
alternatives.log  aptitude  boot.log       btmp          dmesg    dmesg.1.gz  faillog  installer  landscape  syslog  unattended-upgrades  wtmp
apt               auth.log  bootstrap.log  dist-upgrade  dmesg.0  dpkg.log    fsck     kern.log   lastlog    udev    upstart
jadi@wonderland:/var/log$ cd apt
jadi@wonderland:/var/log/apt$ ls
history.log  term.log
jadi@wonderland:/var/log/apt$ 
</pre>
همانطور که می بینید اول تلاش کردیم به دایرکتوری log وارد شویم و سیستم پاسخ داده که *چنین فایل یا دایرکتوری‌ای موجود نیست*. سپس ابتدا به دایرکتوری var رفته‌ایم و بعد با گرفتن ls، وارد دایرکتوری apt شده‌ایم و از آنجا ls گرفته‌ایم. این امکان از ابتدا موجود بود که با دستور <code>cd log/var/apt</code> وارد همان دایرکتوری شویم. 

<p class="bg-info"><strong>تفاوت مسیرهای محلی و مسیرهای کامل.</strong>
در صورتی که در ابتدای هر مسیری / بگذاریم، داریم به دستور مورد نظر می‌گوییم که مسیر فایل را از دایرکتوری ریشه مشخص کرده‌ایم. مثلا در هرجایی از سیستم که باشیم می‌توانیم با موفقیت دستور <code>cd /var/log/apt</code> را اجرا کنیم. اما اگر ابتدای مسیردهی خود را با / آغاز نکنیم، مشغول دادن مسیرهای محلی هستیم یعنی با دستور <code>cd var/log/apt</code> به سیستم فرمان داده‌ایم که *در همین جایی که هستم دنبال دایرکتوری var بگرد و داخل آن به دایرکتوری log برو و در نهایت به apt وارد بشو*. این دستور در یک سیستم لینوکس معمول که دایرکتوری های اضافی در آن ایجاد نکرده باشیم، فقط از مسیر ریشه کار خواهد کرد چون فقط اگر در ریشه ایستاده باشیم، زیر پایمان یک دایرکتوری var وجود دارد.
</p>

درک شاخه‌بندی و جایی که ایستاده‌اید و مسیرهای محلی و مطلق در ابتدا کمی پیچیده است ولی در زندگی روزمره به سرعت آن را یاد خواهید گرفت. این نکته را هم در یاد داشته باشید که هر دایرکتوری حاوی دو *فایل مجازی* خاص هم هست: نقطه و دو نقطه. فایل نقطه به معنای *همین دایرکتوری* بوده و فایل *دو نقطه* به معنی یک دایرکتوری بالاتر است. منطقی است که زدن سی دی دو نقطه، باعث یک پله بالارفتن در درخت دایرکتوری‌ها شود:

<pre>
jadi@wonderland:/var/log/apt$ cd ..
jadi@wonderland:/var/log$ 
</pre>

و **آخرین نکته**‌! در لینوکس هرچقدر هم که نوشیده باشید، رسیدن به خانه ساده است. زدن یک cd خالی، شما را از هر کجا به خانه‌تان خواهد رساند:

<pre>
jadi@wonderland:/var/log$ cd
jadi@wonderland:~$ pwd
/home/jadi
</pre>

و این دستور معادل <code>~ cd</code> است چون ~ برای هر کاربر به معنی *دایرکتوری خانه من* است.

## cp برای کپی کردن فایل‌ها
با دستور cp که مخفف کپی است، می‌توانید کپی جدیدی از فایل‌های موجود در سیستم تهیه کنید. دستور کلی به این شکل است:

<pre>
cp file1 file2
</pre>
 
که باعث کپی شدن فایل اول به اسم فایل دوم می‌شود (در نهایت دو نسخه از فایل خواهید داشت). دقت کنید که مانند تمام دستورات دیگر، فایل‌ها می‌توانند با نام مسیر همراه شوند:

<pre>
jadi@wonderland:~$ ls
1.txt  digits  donot.read.me  empty  mystery  project
jadi@wonderland:~$ cp 1.txt 2.txt
jadi@wonderland:~$ ls
1.txt  2.txt  digits  donot.read.me  empty  mystery  project
jadi@wonderland:~$ 
</pre>

می‌بینید که یک کپی از فایل ۱ گرفته‌ایم. همینکار را می‌شود با دادن مسیر نیز انجام داد:

<pre>
jadi@wonderland:~$ ls
1.txt  2.txt  digits  donot.read.me  empty  mystery  project
jadi@wonderland:~$ ls mystery/
jadi@wonderland:~$ cp 1.txt mystery/
jadi@wonderland:~$ ls mystery/
1.txt
</pre>

توجه کنید که چطور با زدن مسیر مورد نظر در جلوی دستور لیست، لیست فایل‌های درون آن دایرکتوری را بررسی کرده‌ایم. 

## rm برای حذف فایل‌ها
دستور rm که خلاصه remove است، فایل‌ها را حذف می‌کند، ساده و سر راست و خطرناک! 
<pre>
jadi@wonderland:~$ ls
1.txt  2.txt  digits  donot.read.me  empty  mystery  project
jadi@wonderland:~$ rm 2.txt 
jadi@wonderland:~$ ls
1.txt  digits  donot.read.me  empty  mystery  project
</pre>

مشخص است که زدن دستوری مانند <code>\* rm</code> کل فایل‌های دایرکتوری موجود را حذف کرد. سوییچ مرسوم این دستور r- است که باعث می‌شود فایل‌ها به شکل recursive یا بازگشتی حذف شوند که در دنیای کامپیوتر به معنای *این جا و همه دایرکتوری‌های توی اینجا* است. در بررسی این دستور کمی احتیاط کنید ولی نگران هم نباشید و در زندگی هم فراموش نکنید که چیزهایی هست که بهتر است حذف شوند. یک rm ساده روی فایل‌هایی که آن‌ها را نمی‌خواهید می‌تواند فرصت‌های جدیدی برایتان فراهم کند.


## mv برای تغییر نام یا مسیر فایل‌ها
این دستور که خلاصه move است، می‌تواند تقریبا مانند کپی، فایلی را از یک نام یا مسیر به نام یا مسیر دیگر *انتقال* دهد. این دستور بر خلاف دستور کپی، فایل‌ اول را حذف و فایل دوم را ایجاد می‌کند. 

<pre>
jadi@wonderland:~$ ls
1.txt  digits  donot.read.me  empty  mystery  project
jadi@wonderland:~$ mv 1.txt 2.txt
jadi@wonderland:~$ ls
2.txt  digits  donot.read.me  empty  mystery  project
</pre>
## touch برای ایجاد یا آپدیت تاریخ یک فایل
این دستور در ساده‌ترین حالت یک نام فایل در جلوی خودش می‌گیرد و 

- اگر فایلی به این اسم موجود نباشد، یک فایل خالی به آن نام می سازد
- اگر فایل از قبل موجود باشد، تاریخ آپدیت آن را به تاریخ حال آپدیت می‌کند

با اینکه این دستور در این لحظه چندان مفید به نظر نمی رسد، از تعداد دفعاتی که در آینده آن را استفاده می‌کنید تعجب خواهید کرد.
<pre>
jadi@wonderland:~$ ls -ltrh
total 20K
-rw-rw-r-- 1 jadi jadi   64 Jul  6 15:50 2.txt
-rw-rw-r-- 1 jadi jadi    0 Jul  6 15:50 empty
-rw-rw-r-- 1 jadi jadi   17 Jul  6 15:50 donot.read.me
-rw-rw-r-- 1 jadi jadi   21 Jul  6 15:50 digits
drwxrwxr-x 2 jadi jadi 4.0K Jul  6 15:51 project
drwxrwxr-x 2 jadi jadi 4.0K Jul  6 16:44 mystery
jadi@wonderland:~$ touch newfile
jadi@wonderland:~$ ls
2.txt  digits  donot.read.me  empty  mystery  newfile  project
jadi@wonderland:~$ touch 2.txt 
jadi@wonderland:~$ ls -ltrh
total 20K
-rw-rw-r-- 1 jadi jadi    0 Jul  6 15:50 empty
-rw-rw-r-- 1 jadi jadi   17 Jul  6 15:50 donot.read.me
-rw-rw-r-- 1 jadi jadi   21 Jul  6 15:50 digits
drwxrwxr-x 2 jadi jadi 4.0K Jul  6 15:51 project
drwxrwxr-x 2 jadi jadi 4.0K Jul  6 16:44 mystery
-rw-rw-r-- 1 jadi jadi    0 Jul  6 16:52 newfile
-rw-rw-r-- 1 jadi jadi   64 Jul  6 16:52 2.txt
jadi@wonderland:~$ 
</pre>

## mkdir
با این دستور می‌توانید یک دایرکتوری بسازید:
<pre>
jadi@wonderland:~$ ls
1.txt  digits  donot.read.me  empty  mystery  project
jadi@wonderland:~$ mkdir newdir
jadi@wonderland:~$ ls
1.txt  digits  donot.read.me  empty  mystery  newdir  project
jadi@wonderland:~$ mkdir newdir/newer
jadi@wonderland:~$ ls newdir/ -ltrh
total 4.0K
drwxrwxr-x 2 jadi jadi 4.0K Jul  6 16:54 newer
</pre>

## rmdir
این دستور یک دایرکتوری خالی را پاک می‌کند. مهم است که پیش از پاک کردن یک دایرکتوری <abbr title="یادتان هست؟ با دستور rm">فایل ‌های درون آن را پاک کرده باشید</abbr>.
<pre>
jadi@wonderland:~$ ls 
1.txt  digits  donot.read.me  empty  mystery  newdir  project
jadi@wonderland:~$ touch newdir/newfile
jadi@wonderland:~$ ls newdir/
newer  newfile
jadi@wonderland:~$ rmdir newdir/newer
jadi@wonderland:~$ ls newdir/
newfile
jadi@wonderland:~$ rmdir newdir/
rmdir: failed to remove ‘newdir/’: Directory not empty
jadi@wonderland:~$ rm newdir/newfile 
jadi@wonderland:~$ ls newdir/
jadi@wonderland:~$ rmdir newdir/
jadi@wonderland:~$ ls
1.txt  digits  donot.read.me  empty  mystery  project
</pre>


## cat برای نمایش محتویات یک فایل متنی
دستور کت می‌توانید محتویات یک فایل متنی را نمایش دهد:
<pre>
jadi@wonderland:~$ ls 
1.txt  digits  donot.read.me  empty  mystery  project
jadi@wonderland:~$ cat digits 
1
2
3
4
5
6
7
8
9
0

jadi@wonderland:~$ cat 1.txt 
This is a normal text file
it has 3 lines
this is the last line
</pre>

## less برای بررسی محتویات فایل‌های متنی
این دستور برای دیدن محتوای یک فایل متنی استفاده می‌شود. با زدن less filename محتویات فایل به نمایش درمی‌آیند و شما می توانید با زدن کلیدهای بالا و پایین خط به خط در آن حرکت کنید یا با زدن space یک صفحه به جلو بروید. برای خروج از برنامه less کافی است کلید q را فشار دهید و در صورتی که نیاز داشتید چیزی را در بین متن جستجو کنید، بعد از زدن یک / متن مورد جستجو را تایپ کرده، انتر را فشار دهید. زدن اسلش مجدد متن مورد جستجو را دوباره در بخش‌های جلوتر متن سرچ خواهید کرد و اگر خواستید از جایی که هستید رو به عقب جستجو کنید، کافی است دوباره ? را تایپ کنید و انتر بزنید. این را هم بگویم که رفتن به سر یک خط مشخص از طریق تایپ کردن شماره خط و بعد فشار دادن کلید g ممکن و است در نهایت G (gبزرگ) هم شماره به آخرین متن باز شده خط می‌برد.

گیج شدن ممنوع ! به همین سادگی:

- / و بعد یک متن ، آن متن را جستجو می‌کند
- ? رو به عقب جستجو می‌کند
- بالا پایین و اسپیس در متن جلو عقب می‌رود
- شماره خط و g به آن خط خاص می‌رود
- G به آخرین خط می‌رود
- و q که اول quit است از لس خارج می‌شود.

<p class="bg-warning">بعضی کاربران قدیمی سیستم عامل فسیل شده <abbr title="سیستم عامل دیسک که اولین سیستم عامل مایکروسافت برای کامپیوترهای پی سی بود">داس</abbr>  که بعدا به لینوکس مهاجرت کرده‌اند، بنا به عادت داسی قدیم خود از دستور more به جای less استفاده می‌کنند! هرگز اینکار را نکنید. less بسیار قدرتمند از more بوده و با اینکه دستور more هم در لینوکس وجود دارد ولی استفاده از آن به معنی عدم آشنایی شما با دستور بهتر less است. بدون جنگ با کسانی که از more استفاده می کنند، به راحتی از less استفاده کنید و فراموش نکنید که less is more than more!</p>

## wc برای گرفتن آمار یک متن
دستور wc اسمش را از توالت نگرفته! wc مخفف word count یا شماره کلمات است. در صورت دادن یک فایل به عنوان آرگومان، این دستور به شما می‌گوید که این فایل حاوی چند کاراکتر، چند کلمه و چند خط است:
<pre>
jadi@wonderland:~$ wc ilovelist.txt 
 8  9 48 ilovelist.txt
</pre>
مشاهده می‌کنیم که فایل ilovelist.txt حاوی ۸ خط، ۹ کلمه و ۴۸ کاراکتر است. سوییچ بسیار رایج این دستور l- بوده که از line گرفته شده و تنها می‌گوید فایل ورودی، چند خط دارد:
<pre>
jadi@wonderland:~$ cat digits.txt 
1
2
3
4
5
6
7
8
9
0
jadi@wonderland:~$ wc -l digits.txt 
10 digits.txt
</pre>



## grep برای جستجوی متن
با این دستور بسیار پرکاربرد، می‌توانیم در یک یا چند فایل به دنبال خطوطی بگردیم که حاوی عبارت خاصی هستند. برای مثال اول به محتویات این فایل نگاه کنید:
<pre>
jadi@wonderland:~$ cat sites 
linux   linuxbook.ir
jadi    jadi.net
jadi    twitter.com/jadi
google  google.com
mail    gmail.com
github  github.com
github  github.io
</pre>

حالا برای پیدا کردن تمام خطوطی که در آن کلمه jadi آمده می‌زنیم:


<pre>
jadi@wonderland:~$ grep jadi sites 
jadi    jadi.net
jadi    twitter.com/jadi
jadi@wonderland:~$ 
</pre>

یا به دنبال تمام سایت‌هایی می گردیم که روی دامنه‌های دات کام هستند:
<pre>
jadi@wonderland:~$ grep com sites 
jadi    twitter.com/jadi
google  google.com
mail    gmail.com
github  github.com
</pre>

لازم به تکرار است که مانند هر دستور دیگر لینوکس، استفاده از * به جای نام فایل به معنای *در تمام فایل‌های دایرکتوری جاری* است پس با دستور زیر می‌توان در تمام <abbr title="فراموش که نکرده‌اید؟ هر کاربر با علامت ~ به دایرکتوری خانه‌اش اشاره می‌کند">دایرکتوری خانه جادی</abbr>، به دنبال خطوطی گشت که linux در آن‌ها آمده:

<pre>
jadi@wonderland:~$ grep -r linux ~
/home/jadi/ilovelist.txt:linux
/home/jadi/sites:linux  linuxbook.ir
</pre>


## sudo برای اجرای دستورات با دسترسی روت
این دستور به شما اجازه می‌دهد که با وارد کردن *پسورد خودتان* دستوری را با دسترسی روت یعنی بالاترین سطح دسترسی یک سیستم لینوکسی، اجرا کنید. در سیستم‌هایی مانند اوبونتو که به شکل پیش فرض کاربر روت اجازه داخل شدن به سیستم را ندارد، sudo روشی است برای کارهایی که نیازمند دسترسی بالاتر هستند. برای مثال با دستور زیر می‌توانید برنامه jcal را نصب کنید:
<pre>
jadi@wonderland:~$ sudo apt-get install jcal
[sudo] password for jadi: 
...
...
Reading package lists... Done
Building dependency tree       
Reading state information... Done
The following extra packages will be installed:
  libjalali0
The following NEW packages will be installed:
  jcal libjalali0
0 upgraded, 2 newly installed, 0 to remove and 0 not upgraded.
Need to get 32.4 kB of archives.
After this operation, 129 kB of additional disk space will be used.
Do you want to continue? [Y/n] 
Get:1 http://us.archive.ubuntu.com/ubuntu/ trusty/universe libjalali0 amd64 0.4.1-2 [13.2 kB]
...
Setting up jcal (0.4.1-2) ...
Processing triggers for libc-bin (2.19-0ubuntu6) ...
</pre>

کاملا واضح است که در همه سیستم‌ها همه کاربرها به این دستور دسترسی ندارند و زدن sudo ممکن است است به آن‌ها اخطار بدهد که آن‌ها اجازه ارتقاء دسترسی خود به روت را ندارند و این عمل مجرمانه آن‌ها به مدیر سیستم گزارش خواهد شد. اگر چنین اتفاقی برای شما افتاد نگران نباشید چون هیچ ‌وقت هیچ کس به این گزارش‌ها توجهی نمی‌کند.

## passwd
با پرسیدن پسورد فعلی، پسورد شما را تغییر می‌دهد. 
<pre>
jadi@wonderland:~$ passwd
Changing password for jadi.
(current) UNIX password: 
Enter new UNIX password: 
Retype new UNIX password: 
passwd: password updated successfully
</pre>
توجه کنید که در حین وارد کردن کلمه عبور قدیم و بعد کلمه عبور جدید، هیچ چیزی روی صفحه نمایش داده نمی‌شود تا کسی که ممکن است از بالای شانه شما در حال نگاه کردن به مانیتور باشد، متوجه پسورد شما و حتی طول آن هم نشود. 

<p class="bg-warning">در بعضی سیستم‌ها ممکن است حداقلی اجباری برای طول یا پیچیدگی پسورد در نظر گرفته شده باشد و اگر پسوردی کوتاهتر وارد کنید، پذیرفته نشود. همیشه پیام‌های سیستم را با دقت بخوانید تا متوجه موفقیت آمیز بودن یا خطای احتمالی کارهای خود بشوید.</p>


#دستورات عمومی
## clear
یکی از ساده‌ترین دستورات: صفحه را پاک می‌کند تا محیط کار شما خلوت و تمیز شود.

## date
در ساده‌ترین شکل، تاریخ فعلی سیستم را نشان می‌دهد.

<pre>
jadi@wonderland:~$ date
Sun Jul  6 17:17:39 IRDT 2014
</pre>

## locate
این دستور جای یک فایل را به شما نشان می‌دهد. فرض کنید می دانید در سیستم فایلی به اسم do.md وجود دارد ولی نمی‌دانیم کجاست، دستور locate می توانید مکان آن را نشان دهد:

<pre >
jadi@wonderland:~$ locate do.md
/home/jadi/w/fun/do.md
/var/lib/dpkg/info/sudo.md5sums
</pre>

دقت کنید که یک فایل دیگر هم که حاوی این عبارت بوده پیدا شده.

به خاطر پرهزینه بودن گشتن تمام فایل‌های سیستم، دستور locate به شکل زنده و در زمان واقعی روی دیسک جستجو نمی‌کند بلکه هر بیست و چهار ساعت یکبار با دستوری به نام updatedb فهرستی از همه فایل‌های سیستم می‌سازد و موقع اجرای دستور locate فقط به این بانک اطلاعاتی نگاه می‌کند. به عبارت دیگر در صورتی که فایلی به تازگی ایجاد شده باشد در خروجی‌های locate دیده نخواهد شد و اگر فایلی را از سیستم پاک کنید، تا بیست و چهار ساعت هنوز در خروجی دستور locate دیده می‌شود. برای به روز رسانی بانک اطلاعاتی می‌توانید به شکل دستی و با دسترسی روت دستور updatedb را اجرا کنید (مثلا با <code>sudo updatedb</code>). 

## cal
این برنامه می‌توانید یک تقویم زیبا را نشان دهد. در صورتی که بدون هیچ سوییچی از آن استفاده کنید، تقویم ماه جاری را نشان خواهد داد:
<pre>
jadi@wonderland:~$ cal
     July 2014        
Su Mo Tu We Th Fr Sa  
       1  2  3  4  5  
 6  7  8  9 10 11 12  
13 14 15 16 17 18 19  
20 21 22 23 24 25 26  
27 28 29 30 31     
</pre>

ولی برای برنامه ریزی می‌توانید با دادن سوییچ 3- از برنامه درخواست کرد که تقویم ماه‌های قبل و بعد را هم نشان بدهد:
<pre>
jadi@wonderland:~$ cal -3
     June 2014             July 2014            August 2014       
Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa  
 1  2  3  4  5  6  7         1  2  3  4  5                  1  2  
 8  9 10 11 12 13 14   6  7  8  9 10 11 12   3  4  5  6  7  8  9  
15 16 17 18 19 20 21  13 14 15 16 17 18 19  10 11 12 13 14 15 16  
22 23 24 25 26 27 28  20 21 22 23 24 25 26  17 18 19 20 21 22 23  
29 30                 27 28 29 30 31        24 25 26 27 28 29 30  
                                            31                 
</pre>

و از این هم جالب‌تر، چیزی مانند <code>cal 1979</code> است که تقویم سال ۱۹۷۹ را نمایش می‌دهد. 

<p class="bg-info">با نصب برنامه jcal، تمام این قابلیت‌ها را در تقویم جلالی ایران خواهید داشت و مثلا من می‌توانم با زدن دستور jcal 1356 کشف کنم که روز تولدم چند شنبه بوده است.</p>


## history
هزار دستوری که سابقا در سیستم اجرا شده‌اند را نشان می‌دهد.

#عملیات مرتبط با کاربر

## man
این دستور مهمترین دستور لینوکس است! مخفف manual بوده و با کمک آن می‌توانید راهنمای دستورات دیگر را مطالعه کنید. برای مثال وارد کردن دستور man ls راهنمای کامل دستور ls را به شما نشان می‌دهد. خواندن این راهنماها در اوایل کار کمی دشوار است اما با کمی تلاش می‌توانید آن‌ها را بفهمید، به محض درک شیوه خواندن صفحات man (که باکلاس‌ترها به آن‌ man page می‌گویند) دیگر نیازی به هیچ راهنمایی نخواهید داشت - حداقل در سطح این کتاب.


<hr >

اینجا سری اول از دستورات خط فرمان را تمام می‌کنیم. در درس بعدی می‌توانید دستورهای پیشرفته تر مانند دستورهای مرتبط با شبکه را ببینید و کشف کنید که چطور این دستورات ریز که هر کدام یک کار را به خوبی انجام می‌دهند، می‌توانند مثل لگو با هم ترکیب شوند تا ابزارهای جادویی خلق کنند.



