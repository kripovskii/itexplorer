import React, { useState } from 'react';
import { Box, Flex, Text, Input, Textarea, Button, useToast } from '@chakra-ui/react';
import { Element } from 'react-scroll';
import { useSpring, animated } from 'react-spring';
import axios from 'axios';


// Импортируйте шрифт Montserrat
import '@fontsource/montserrat';

const HomePage = () => {
  const section1Styles = {
    backgroundImage: "url('./hosting-servers.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 1)', // Increased opacity (0.8)
  };
  
  const section2Styles = {
    backgroundImage: "url('./images.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 1)', // Increased opacity (0.8)
    textAlign: 'right', // Align text to the right
  };
  
  
  const section3Styles = {
    backgroundImage: "url('./out.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 1)', // Increased opacity (0.8)
  };
  

  const textStyle = {
    color: 'white',
    fontSize: '2rem',
    maxWidth: '80%',
    textAlign: 'left',
    fontFamily: 'Montserrat, sans-serif',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '2rem',
  };

  const section1Animation = useSpring({
    opacity: 1,
    transform: 'scale(1)',
    from: { opacity: 0, transform: 'scale(0.8)' },
    config: { duration: 1000 },
  });

  const section2Animation = useSpring({
    opacity: 1,
    transform: 'scale(1)',
    from: { opacity: 0, transform: 'scale(0.8)' },
    config: { duration: 1000 },
  });

  const section3Animation = useSpring({
    opacity: 1,
    transform: 'scale(1)',
    from: { opacity: 0, transform: 'scale(0.8)' },
    config: { duration: 1000 },
  });

  const formTextStyle = {
    color: 'white',
    fontSize: '1.5rem',
    
    maxWidth: '95%',
    textAlign: 'center',
    fontFamily: 'Montserrat, sans-serif',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    padding: '2rem',
  };
  

  const formStyles = {
    backgroundImage: "url('./form-background.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '70vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    px: 2, // Updated value
    py: 4, // Updated value
  };
  const section4Styles = {
    backgroundImage: "url('./your-image.jpg')", // Замените 'your-image.jpg' на путь к вашей картинке
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Increased opacity (0.8)
  };

  const tableStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1rem',
  };

  const tableItemStyles = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '1rem',
    color: 'white',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '1.5rem',
  };


  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: name,
      phone: phone,
      email: email,
      question: question,
    };

    axios.post('/api/submit-form', formData)
      .then((response) => {
        console.log('Form submitted:', response.data);
        setSubmitted(true);
        toast({
          title: 'Спасибо!',
          description: 'Сообщение отправлено успешно!',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
      })
      .catch((error) => {
        console.error('Form submission error:', error);
        toast({
          title: 'Ошибка!',
          description: 'Произошла ошибка при отправке сообщения.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      });
  };

  return (
    <Box py={0}>
      <Element name="section1">
        <animated.div style={section1Animation}>
          <Flex justify="center" align="center" h="100vh" style={section1Styles}>
            <Box px={4} py={8}>
              <Text style={textStyle}>
                Ваш проводник в мире IT
              </Text>
              <Text style={textStyle}>
                Мы – команда людей, большую часть своей профессиональной жизни занимающихся информационными
                технологиями, управлением процессами и проектами, автоматизацией самых разных задач бизнеса и
                производства. Мы оказываем услуги ИТ-аутсорсинга, обслуживания оборудования и программного
                обеспечения. Вы передаете нашим специалистам обслуживание ИТ-инфраструктуры вашей компании, а
                взамен получаете высокое качество сервиса и оперативное решение задач. Больше нет необходимости
                содержать штатных ИТ-специалистов.
              </Text>
            </Box>
          </Flex>
        </animated.div>
      </Element>

      <Element name="section2">
  <animated.div style={section2Animation}>
    <Flex justify="center" align="center" bg="gray.200" h="100vh" style={section2Styles}>
      <Box px={1} py={8} maxWidth="95%" alignSelf="flex-end" ml="auto" mr={-270}>
        <Text style={textStyle}>
          Что мы можем предложить вам?
        </Text>
        <Text style={textStyle}>
          Наша команда состоит из опытных IT-специалистов, которые имеют глубокие знания и понимание последних технологических тенденций. Мы готовы поделиться своим опытом и помочь вам справиться с любыми IT-вызовами. Мы стремимся к высочайшему качеству во всем, что делаем. Наша компания следует лучшим практикам в отрасли и придерживается строгих стандартов безопасности данных. Ваши ценные данные будут защищены и обработаны с максимальной конфиденциальностью.
          Быстрое развитие технологий требует от компаний быть на шаг впереди своих конкурентов.
          Мы поможем вам внедрить инновационные решения, которые помогут вам повысить эффективность, улучшить пользовательский опыт и получить конкурентное преимущество на рынке.
        </Text>
      </Box>
    </Flex>
  </animated.div>
</Element>




      <Element name="section3">
        <animated.div style={section3Animation}>
          <Flex justify="center" align="center" h="100vh" style={section3Styles}>
            <Box px={12} py={8}>
              <Text style={textStyle}>
              Улучшите и оптимизируйте свои текущие IT-решения с нами!
              </Text>
              <Text style={textStyle}>Мы предлагаем проактивный мониторинг вашей IT-инфраструктуры, чтобы выявить возможные проблемы заранее и предотвратить их возникновение. Мы также обеспечиваем регулярное обслуживание и обновление ваших систем, чтобы они всегда работали на пике производительности. Наша служба технической поддержки доступна для вас 24/7. Мы готовы ответить на ваши вопросы, решить возникшие проблемы и обеспечить бесперебойную работу ваших IT-систем. Вы можете полностью положиться на нас, зная, что ваш бизнес будет продолжать функционировать без сбоев. Мы поможем вам оптимизировать вашу IT-инфраструктуру, чтобы она соответствовала вашим бизнес-потребностям. Мы предлагаем масштабируемые решения, которые будут расти вместе с вашим бизнесом и обеспечивать его успешное развитие.</Text>
            </Box>
          </Flex>
        </animated.div>
      </Element>

      {/* Empty Block */}
      <Element name="section4">
        <Flex justify="center" align="center" h="100vh" style={section4Styles}>
          <Box px={12} py={7} style={tableStyles}>
            <Box style={tableItemStyles}>
              <Text>Система регламентных операций</Text>
              <Text>ИТ-структура требует постоянного обслуживания, поэтому нами предусмотрена система регламентных операций. Такой подход исключает возможность сбоев в работе ИТ-систем. Глобальную настройку ИТ-структуры и профилактические работы мы выполняем в нерабочее время, что позволяет не прерывать работу вашего предприятия.</Text>
            </Box>
            <Box style={tableItemStyles}>
              <Text>Система  постановки задач</Text>
              <Text>Используемая система управления задачами позволяет клиенту ставить задачи нашим сотрудникам, следить за ходом их выполнения и выводить отчеты о проделанной работе. Исходя из этого, каждый клиент может самостоятельно контролировать качество оказания ИТ-услуг, и прослеживать каждый шаг решению поставленной задачи. </Text>
            </Box>
            <Box style={tableItemStyles}>
              <Text>Экстренная  замена оборудования</Text>
              <Text>Мы предоставляем нашим клиентам экстренную замену оборудования в случае выхода его из строя. Это обеспечивает бесперебойную работу ИТ-систем наших клиентов. Мы думаем заблаговременно и прорабатываем наши действия в случае форс-мажора.</Text>
            </Box>
            <Box style={tableItemStyles}>
              <Text>Принцип предварительного
тестирования</Text>
              <Text>Мы имеем проработанные готовые решения и корпоративные стандарты ИТ-поддержки. Мы не применяем их на практике до того момента, пока не изучим их полностью и не убедимся в их стабильности. Наши проверенные решения – залог эффективности вашего бизнеса.</Text>
            </Box>
          </Box>
          
        </Flex>
      </Element>

      <Element name="map">
        <Box>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A095b4b1e31a19fa471843ec84921f875f04ed2e6f49a2ae62f163776b666fbd4&amp;source=constructor"
            width="100%"
            height="550"
            frameBorder="0"
            title="Yandex Map Widget"
          ></iframe>
        </Box>
      </Element>

      <Element name="feedback">
        {submitted ? (
          <Flex justify="center" align="center" h="100vh" style={formStyles}>
            <Text style={formTextStyle}>Спасибо за обращение!</Text>
          </Flex>
        ) : (
          <Flex justify="center" align="center" h="100vh" style={formStyles}>
            <Box p={8} bg="rgba(0, 0, 0, 0.5)" borderRadius="md">
              <form onSubmit={handleSubmit}>
                <Text mb={4} style={formTextStyle} >
                Напишите нам!
                </Text>
                <Input
                  mb={4}
                  type="text"
                  placeholder="Фио"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Input
                  mb={4}
                  type="tel"
                  placeholder="Телефон"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <Input
                  mb={4}
                  type="email"
                  placeholder="Электронная Почта"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Textarea
                  mb={4}
                  placeholder="Ваш вопрос или сообщение"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                />
                <Button type="Submit" colorScheme="teal" size="md">
                  Отпраить
                </Button>
              </form>
            </Box>
          </Flex>
        )}
      </Element>
    </Box>
  );
};

export default HomePage;
