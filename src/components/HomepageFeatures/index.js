import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Лёгкие в настройке',
    Svg: require('').default,
    description: (
      <>
        Наши плагины лёгкие в настройке. Вы в любой момент можете открыть документацию
        и найти в ней всю информацию про нужный вам плагин.
      </>
    ),
  },
  {
    title: 'Практичные и безопасные',
    Svg: require('').default,
    description: (
      <>
        Наши плагины тестятся на нескольких серверах от 50 до 150 онлайна. Перед публикацией
        мы всегда проверяем их на наличие уязвимостей и багов, которые могут случится у вас.
      </>
    ),
  },
  {
    title: 'Доступность',
    Svg: require('').default,
    description: (
      <>
        Несмотря на большой функционал, мы практически всегда публикуем наши плагины бесплатно.
        Если вы хотите заказать плагин, вы всегда можете обратится к нам.(Телеграм - @etern4lal1en).
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
