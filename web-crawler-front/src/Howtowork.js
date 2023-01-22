import { Timeline } from 'antd';
const Howtowork = () => (
  <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
      <p className="sm:text-center mt-2 text-3xl font-bold tracking-tight text-indigo-900 sm:text-4xl">نحوه کار با سامانه</p>
      <br></br>
      <hr></hr>
        <div className="sm:text-right">
          <p className="max-w-2xl text-lg leading-8 text-gray-900 !important" dir="rtl">
            در زیر توضیح محتوای هر فیلد از فرم آمده است.
          </p>
          <br></br>
        </div>
        <div className="sm:text-Right" dir='rtl'>
            <Timeline>
              <Timeline.Item>آدرس سایت مورد نظر: </Timeline.Item>
              <Timeline.Item>دامنه سایت: </Timeline.Item>
              <Timeline.Item>تعداد صفحات برای انجام خزش: </Timeline.Item>
              <Timeline.Item>میزان دیتای موردنظر: </Timeline.Item>
              <Timeline.Item>نام ویژگی: </Timeline.Item>
              <Timeline.Item>انتخابگر ویژگی: </Timeline.Item>
              <Timeline.Item>تعداد درخواست ارسالی در ثانیه: </Timeline.Item>
            </Timeline>
        </div>
        <hr></hr>
        <div className="sm:text-justify">
          <p className="max-w-2xl text-lg leading-8 text-gray-900 !important" dir="rtl">
            پس از پر کردن همه فیلدها و انتخاب دکمه ارسال درخواست، سیستم Id برای شما ارسال میکند. با کپی کردن این Id شما میتوانید در منوی صفحه اصلی و انتخاب گزینه «پیگیری کدرهگیری»، با پرکردن فیلدهایی که در ادامه آمده است، خروجی خواسته شده را به صورت جدول و یا دانلود فایل JSON مشاهده کنید.
          </p>
          <br></br>
        </div>
        <div className="sm:text-Right" dir='rtl'>
            <Timeline>
              <Timeline.Item>ID: </Timeline.Item>
              <Timeline.Item>شماره صفحه: </Timeline.Item>
              <Timeline.Item>انداره صفحه: </Timeline.Item>
            </Timeline>
        </div>
      </div>
    </div>
);
export default Howtowork;