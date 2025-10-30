const results = {
            A: {
                title: "Suporte Técnico",
                icon: "fa-headset",
                description: "Você é rápido na resolução de problemas e sabe ouvir as pessoas, procurando sempre ajudá-las em qualquer que seja a situação. Assim, a área da Tecnologia da informação que pode combinar muito bem com você é a de suporte técnico, uma profissão muito necessária nas empresas.",
                tip: "O analista de suporte precisa desenvolver também a paciência, dicção e escrita consistentes para tratar diretamente com as pessoas que solicitam o suporte e podem ter diversos níveis de conhecimento em relação à tecnologia.",
                hashtag: "Arrasou!"
            },
            B: {
                title: "Desenvolvedor(a) de sistemas / Programador(a)",
                icon: "fa-code",
                description: "Você e o desenvolvimento de sistemas/programação foram feitos um para o outro. Entre as várias habilidades que esse profissional precisa ter, o raciocínio lógico é a mais exigida. Nessa área da TI, você também pode imaginar uma história, um layout e ter diversas ideias para criar um aplicativo, um jogo ou software. Já imaginou criar aquele game que vira sucesso entre o pessoal da escola? A sua imaginação é que vai te conduzir para essa profissão.",
                hashtag: "#VaiFundo"
            },
            C: {
                title: "Administrador(a) de banco de dados / Segurança da informação",
                icon: "fa-shield-halved",
                description: "Se preocupar com a segurança dos dados e informações das pessoas é muito importante, principalmente na era em que vivemos, com tantos dados expostos na internet. Por isso, as profissões de administrador(a) de banco de dados e segurança da informação são tão requisitadas atualmente.",
                tip: "Resiliência em situações adversas, firmeza no cumprimento das normas e atenção aliada ao senso de observação dos detalhes são características preponderantes para essa profissão. Se dedique, crie soluções e o seu trabalho será indispensável."
            },
            D: {
                title: "Qualidade de Software",
                icon: "fa-bug",
                description: "Que legal, você combina com a Qualidade de Software. Você é analítico e muito bom em enxergar as possíveis falhas de um software e as até suas melhorias. Essa ajuda é muito importante na etapa de desenvolvimento de programas, pois entregará o melhor serviço, deixando tanto a empresa desenvolvedora quanto os usuários mais felizes.",
                tip: "Em todas as áreas de TI, a língua inglesa é utilizada, como em linguagens, protocolos e padrões diferentes, então, no mínimo, desenvolver a leitura técnica é essencial. Fique ligado!"
            }
        };

        // Atualizar progresso
        document.querySelectorAll('input[type="radio"]').forEach(radio => {
            radio.addEventListener('change', updateProgress);
        });

        function updateProgress() {
            const totalQuestions = 5;
            let answered = 0;
            
            for (let i = 1; i <= totalQuestions; i++) {
                if (document.querySelector(`input[name="q${i}"]:checked`)) {
                    answered++;
                }
            }
            
            const percentage = (answered / totalQuestions) * 100;
            document.getElementById('progress-bar').style.width = percentage + '%';
            document.getElementById('progress-text').textContent = Math.round(percentage) + '%';
        }

        // Processar formulário
        document.getElementById('quiz-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const answers = {A: 0, B: 0, C: 0, D: 0};
            
            for (let i = 1; i <= 5; i++) {
                const selected = document.querySelector(`input[name="q${i}"]:checked`);
                if (selected) {
                    answers[selected.value]++;
                }
            }
            
            let maxCount = 0;
            let result = 'A';
            
            for (let key in answers) {
                if (answers[key] > maxCount) {
                    maxCount = answers[key];
                    result = key;
                }
            }
            
            showResult(result);
        });

        function showResult(resultKey) {
            const result = results[resultKey];
            const resultHTML = `
                <div class="result-icon">
                    <i class="fas ${result.icon}"></i>
                </div>
                <h2 class="mb-4">${result.title}</h2>
                <p class="fs-5 mb-4">${result.description}</p>
                ${result.tip ? `<p class="fs-6 mb-3">${result.tip}</p>` : ''}
                ${result.hashtag ? `<p class="fs-4 fw-bold mt-4">${result.hashtag}</p>` : ''}
            `;
            
            document.getElementById('result-content').innerHTML = resultHTML;
            document.getElementById('quiz-container').style.display = 'none';
            document.getElementById('result-container').style.display = 'block';
            
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        function restartQuiz() {
            document.getElementById('quiz-form').reset();
            document.getElementById('quiz-container').style.display = 'block';
            document.getElementById('result-container').style.display = 'none';
            updateProgress();
            window.scrollTo({top: 0, behavior: 'smooth'});
        }