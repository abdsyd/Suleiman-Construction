import Accordion from 'react-bootstrap/Accordion';
import './faqs.css'

export default function FAQs() {
return (
  <>
    <h1>الأسئلة الشائعة</h1>
    <div className='container mb-5'>
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header> ما هو الغرض من هذا الموقع؟</Accordion.Header>
        <Accordion.Body>
          <div className='d-flex'>
          <div className="vertical-line"></div> {/*Trash not working*/}
          هذا نص تجريبي يستخدم كعنصر نائب. يمكنك استخدامه لاختبار التصميمات أو عرض المحتوى في التطبيقات أو المواقع الإلكترونية. النص العربي هنا يوفر لك فكرة عن كيفية ظهور المحتوى الحقيقي عند إضافته لاحقًا. يتم استخدام هذا النص بشكل شائع في النماذج والتخطيطات لضمان تناسق التصميم قبل نشر المحتوى الفعلي.

          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>كيف يمكنني التسجيل في الموقع؟</Accordion.Header>
        <Accordion.Body>
        <div className='d-flex'>
          <div className="vertical-line"></div> 
          هذا نص تجريبي يستخدم كعنصر نائب. يمكنك استخدامه لاختبار التصميمات أو عرض المحتوى في التطبيقات أو المواقع الإلكترونية. النص العربي هنا يوفر لك فكرة عن كيفية ظهور المحتوى الحقيقي عند إضافته لاحقًا. يتم استخدام هذا النص بشكل شائع في النماذج والتخطيطات لضمان تناسق التصميم قبل نشر المحتوى الفعلي.

          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header> هل يمكنني تحديث معلومات حسابي؟</Accordion.Header>
        <Accordion.Body>
        <div className='d-flex'>
          <div className="vertical-line"></div> 
          هذا نص تجريبي يستخدم كعنصر نائب. يمكنك استخدامه لاختبار التصميمات أو عرض المحتوى في التطبيقات أو المواقع الإلكترونية. النص العربي هنا يوفر لك فكرة عن كيفية ظهور المحتوى الحقيقي عند إضافته لاحقًا. يتم استخدام هذا النص بشكل شائع في النماذج والتخطيطات لضمان تناسق التصميم قبل نشر المحتوى الفعلي.

          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>كيف يمكنني التواصل مع الدعم الفني؟</Accordion.Header>
        <Accordion.Body>
        <div className='d-flex'>
          <div className="vertical-line"></div> 
          هذا نص تجريبي يستخدم كعنصر نائب. يمكنك استخدامه لاختبار التصميمات أو عرض المحتوى في التطبيقات أو المواقع الإلكترونية. النص العربي هنا يوفر لك فكرة عن كيفية ظهور المحتوى الحقيقي عند إضافته لاحقًا. يتم استخدام هذا النص بشكل شائع في النماذج والتخطيطات لضمان تناسق التصميم قبل نشر المحتوى الفعلي.

          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>ما هي طرق الدفع المتاحة؟</Accordion.Header>
        <Accordion.Body>
        <div className='d-flex'>
          <div className="vertical-line"></div> 
          هذا نص تجريبي يستخدم كعنصر نائب. يمكنك استخدامه لاختبار التصميمات أو عرض المحتوى في التطبيقات أو المواقع الإلكترونية. النص العربي هنا يوفر لك فكرة عن كيفية ظهور المحتوى الحقيقي عند إضافته لاحقًا. يتم استخدام هذا النص بشكل شائع في النماذج والتخطيطات لضمان تناسق التصميم قبل نشر المحتوى الفعلي.

          </div>
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
    </div>
    </>
)
}