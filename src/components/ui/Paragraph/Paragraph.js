import React, { useState } from 'react';
import './Paragraph.scss';
import { ReactComponent as Blot } from '../../../img/icons/blot.svg';
import Quote from '../Quote/Quote';

const Paragraph = ({ quote, bg, content }) => {
    // const [text, setText] = useState('content');
    const text =
        '<!-- wp:heading --><h2>Кто мы</h2><!-- /wp:heading --><!-- wp:paragraph --><p><strong class="privacy-policy-tutorial">Предлагаемый текст: </strong>Наш адрес сайта: https://zazhigay.com.</p><!-- /wp:paragraph --><!-- wp:heading --><h2>Комментарии</h2><!-- /wp:heading --><!-- wp:paragraph --><p><strong class="privacy-policy-tutorial">Предлагаемый текст: </strong>Если посетитель оставляет комментарий на сайте, мы собираем данные указанные в форме комментария, а также IP адрес посетителя и данные user-agent браузера с целью определения спама.</p><!-- /wp:paragraph --><!-- wp:paragraph --><p>Анонимизированная строка создаваемая из вашего адреса email ("хеш") может предоставляться сервису Gravatar, чтобы определить используете ли вы его. Политика конфиденциальности Gravatar доступна здесь: https://automattic.com/privacy/ . После одобрения комментария ваше изображение профиля будет видимым публично в контексте вашего комментария.</p><!-- /wp:paragraph --><!-- wp:heading --><h2>Медиафайлы</h2><!-- /wp:heading --><!-- wp:paragraph --><p><strong class="privacy-policy-tutorial">Предлагаемый текст: </strong>Если вы зарегистрированный пользователь и загружаете фотографии на сайт, вам возможно следует избегать загрузки изображений с метаданными EXIF, так как они могут содержать данные вашего месторасположения по GPS. Посетители могут извлечь эту информацию скачав изображения с сайта.</p><!-- /wp:paragraph --><!-- wp:heading --><h2>Куки</h2><!-- /wp:heading --><!-- wp:paragraph --><p><strong class="privacy-policy-tutorial">Предлагаемый текст: </strong>Если вы оставляете комментарий на нашем сайте, вы можете включить сохранение вашего имени, адреса email и вебсайта в куки. Это делается для вашего удобства, чтобы не заполнять данные снова при повторном комментировании. Эти куки хранятся в течение одного года.</p><!-- /wp:paragraph --><!-- wp:paragraph --><p>Если у вас есть учетная запись на сайте и вы войдете в неё, мы установим временный куки для определения поддержки куки вашим браузером, куки не содержит никакой личной информации и удаляется при закрытии вашего браузера.</p><!-- /wp:paragraph --><!-- wp:paragraph --><p>При входе в учетную запись мы также устанавливаем несколько куки с данными входа и настройками экрана. Куки входа хранятся в течение двух дней, куки с настройками экрана - год. Если вы выберете возможность "Запомнить меня", данные о входе будут сохраняться в течение двух недель. При выходе из учетной записи куки входа будут удалены.</p><!-- /wp:paragraph --><!-- wp:paragraph --><p>При редактировании или публикации статьи в браузере будет сохранен дополнительный куки, он не содержит персональных данных и содержит только ID записи отредактированной вами, истекает через 1 день.</p><!-- /wp:paragraph --><!-- wp:heading --><h2>Встраиваемое содержимое других вебсайтов</h2><!-- /wp:heading --><!-- wp:paragraph --><p><strong class="privacy-policy-tutorial">Предлагаемый текст: </strong>Статьи на этом сайте могут включать встраиваемое содержимое (например видео, изображения, статьи и др.), подобное содержимое ведет себя так же, как если бы посетитель зашел на другой сайт.</p><!-- /wp:paragraph --><!-- wp:paragraph --><p>Эти сайты могут собирать данные о вас, использовать куки, внедрять дополнительное отслеживание третьей стороной и следить за вашим взаимодействием с внедренным содержимым, включая отслеживание взаимодействия, если у вас есть учетная запись и вы авторизовались на том сайте.</p><!-- /wp:paragraph --><!-- wp:heading --><h2>С кем мы делимся вашими данными</h2><!-- /wp:heading --><!-- wp:paragraph --><p><strong class="privacy-policy-tutorial">Предлагаемый текст: </strong>Если вы запросите сброс пароля, ваш IP будет указан в email-сообщении о сбросе.</p><!-- /wp:paragraph --><!-- wp:heading --><h2>Как долго мы храним ваши данные</h2><!-- /wp:heading --><!-- wp:paragraph --><p><strong class="privacy-policy-tutorial">Предлагаемый текст: </strong>Если вы оставляете комментарий, то сам комментарий и его метаданные сохраняются неопределенно долго. Это делается для того, чтобы определять и одобрять последующие комментарии автоматически, вместо помещения их в очередь на одобрение.</p><!-- /wp:paragraph --><!-- wp:paragraph --><p>Для пользователей с регистрацией на нашем сайте мы храним ту личную информацию, которую они указывают в своем профиле. Все пользователи могут видеть, редактировать или удалить свою информацию из профиля в любое время (кроме имени пользователя). Администрация вебсайта также может видеть и изменять эту информацию.</p><!-- /wp:paragraph --><!-- wp:heading --><h2>Какие у вас права на ваши данные</h2><!-- /wp:heading --><!-- wp:paragraph --><p><strong class="privacy-policy-tutorial">Предлагаемый текст: </strong>При наличии учетной записи на сайте или если вы оставляли комментарии, то вы можете запросить файл экспорта персональных данных, которые мы сохранили о вас, включая предоставленные вами данные. Вы также можете запросить удаление этих данных, это не включает данные, которые мы обязаны хранить в административных целях, по закону или целях безопасности.</p><!-- /wp:paragraph --><!-- wp:heading --><h2>Куда отправляются ваши данные</h2><!-- /wp:heading --><!-- wp:paragraph --><p><strong class="privacy-policy-tutorial">Предлагаемый текст: </strong>Комментарии пользователей могут проверяться автоматическим сервисом определения спама.</p><!-- /wp:paragraph -->';

    const bgc = ['paragraph'];
    bg && bgc.push(`paragraph_${bg}`);
    const GreetingComponent = (props) => {
        const innerHtml = { __html: props };
        return <div dangerouslySetInnerHTML={innerHtml}></div>;
    };
    // setText(
    const arrElem = text
        ?.replace(/<!-- wp:heading -->/g, 'prg<!-- wp:heading -->')
        .split('prg');
    // for(let i = 0; i<arrElem.length; i++){
    //     arrElem[i]
    // }
    // );

    const razdelenie = (item) => {
        const newItem = item
            .replace(/<!-- wp:heading -->|<!-- wp:paragraph -->/g, '|')
            .replace(/<!-- \/wp:heading -->|<!-- \/wp:paragraph -->/g, '')
            .split('|');
        return newItem;
    };

    // setArrElem(text?);
    console.log(arrElem);
    return (
        <>
            {arrElem.map((item, index) =>
                index % 2 ? (
                    <div key={index} className='paragraph'>
                        <div className='wrap'>
                            {razdelenie(item).map((elem, index) =>
                                elem === '' ? (
                                    console.log('')
                                ) : elem.includes('<h2>') ? (
                                    <div
                                        key={index}
                                        className='paragraph__title'
                                    >
                                        <Blot />
                                        {GreetingComponent(elem)}
                                        <Blot />
                                    </div>
                                ) : (
                                    <div
                                        key={index}
                                        className='paragraph__content'
                                    >
                                        {GreetingComponent(elem)}
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                ) : (
                    <div className='paragraph_light'>
                        <div className='wrap'>
                            {razdelenie(item).map((elem, index) =>
                                elem === '' ? (
                                    ''
                                ) : elem.includes('<h2>') ? (
                                    <div
                                        key={index}
                                        className='paragraph__title'
                                    >
                                        <Blot />
                                        {GreetingComponent(elem)}
                                        <Blot />
                                    </div>
                                ) : (
                                    <div
                                        key={index}
                                        className='paragraph__content'
                                    >
                                        {GreetingComponent(elem)}
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                )
            )}
            {/* <div className='wrap'> */}
            {/* {GreetingComponent(text)}
            {arrElem?.map((elem, index) =>
                elem === '' ? (
                    ''
                ) : elem.includes('<h2>') ? (
                   
                        <div key={index} className='paragraph__title'>
                            <Blot />
                            {GreetingComponent(elem)}
                            <Blot />
                        </div>
                    
                ) : (
                    <div key={index} className='paragraph__content'>
                       {GreetingComponent(elem)}
                    </div>
                )
            )} */}
            {/* </div> */}
        </>
    );
};

export default Paragraph;
