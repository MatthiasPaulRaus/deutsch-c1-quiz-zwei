const QuestionsList = [
    {
        question:"Hast du eine Ahnung, wie das funktioniert?",
        answersList: [
            {answer:"So geht es auf keinen Fall.", isCorrect:true},
            {answer:"Sie funktionieren so nicht.", isCorrect:false},
            {answer:"So konnte es gehen.", isCorrect:false},
        ]
    },{
        question:"Wie ist Ihr persönliches Befinden?",
        answersList: [
            {answer:"Zurzeit geht es ihr recht gut.", isCorrect:false},
            {answer:"Eigentlich geht es mir ganz gut.", isCorrect:true},
            {answer:"Im Moment habe ich kaum Interesse dazu.", isCorrect:false},
        ]
    },{
        question:"Sie hat es leider sehr schwer.",
        answersList: [
            {answer:"Ja, sie hat ziemlich viel Übergewicht.", isCorrect:false},
            {answer:"Es wiegt einfach zu viel für sie.", isCorrect:false},
            {answer:"Das tut mir wirklich Leid für sie.", isCorrect:true},
        ]
    },{
        question:"Wovon handelt das Theaterstück?",
        answersList: [
            {answer:"Es handelt sich um die Probleme der Jugendlichen.", isCorrect:true},
            {answer:"Es gibt viele Probleme mit den Zuschauern.", isCorrect:false},
            {answer:"Es ging um künstliche Intelligenz.", isCorrect:false},
        ]
    },{
        question:"Wie kann ich erfolgreich im Beruf werden.",
        answersList: [
            {answer:"Das Beste war sich zu spezialisieren.", isCorrect:false},
            {answer:"Dich zu spezialisieren, ist der beste Weg.", isCorrect:true},
            {answer:"Spezialisierung wäre der beste Weg gewesen.", isCorrect:false},
        ]
    },{
        question:"Es ist fraglich, ob das stimmt.",
        answersList: [
            {answer:"Ja, das ist eine gute Frage.", isCorrect:false},
            {answer:"Nein, dem kann ich nicht zustimmen.", isCorrect:false},
            {answer:"Ja, ich habe auch Zweifel daran.", isCorrect:true},
        ]
    },{
        question:"Mehrmals im Leben den Wohnort zu wechseln",
        answersList: [
            {answer:"ist nichts Außergewöhnliches.", isCorrect:true},
            {answer:"ist außerdem nichts Besonderes.", isCorrect:false},
            {answer:"hat etwas Besonderes für dich.", isCorrect:false},
        ]
    },{
        question:"Der Hotelkunde wollte wissen,",
        answersList: [
            {answer:"ob der Parkplatz gebührenfrei wäre.", isCorrect:false},
            {answer:"wo der freie Parkplatz sei.", isCorrect:true},
            {answer:"warum der Parkplatz frei sein sollte.", isCorrect:false},
        ]
    },{
        question:"Jetzt habe ich mich verwählt.",
        answersList: [
            {answer:"Oh je! Du hast das Falsche gewählt.", isCorrect:false},
            {answer:"Du hättest etwas Anderes nehmen sollen.", isCorrect:false},
            {answer:"Was, du hast die falsche Nummer gewählt?", isCorrect:true},
        ]
    },{
        question:"Die Touristen wollten wissen,",
        answersList: [
            {answer:"warum der Platz eigentlich so heiße.", isCorrect:true},
            {answer:"warum der Ort noch keinen Namen hatte.", isCorrect:false},
            {answer:"ob der weltbekannte Ort einen Namen habe.", isCorrect:false},
        ]
    },
    
    {
        question:"Die Leute fragten mich,",
        answersList: [
            {answer:"was auf dem Filmfest gezeigt worden sei.", isCorrect:true},
            {answer:"was auf der Ausstellung versteckt worden ist.", isCorrect:false},
            {answer:"ob sie in dem Museum etwas gesehen haben.", isCorrect:false},
        ]
    },{
        question:"Die Personalcheffin meinte,",
        answersList: [
            {answer:"wir sollten die Bewerbungsunterlagen zurückschicken.", isCorrect:false},
            {answer:"ich solle ihr meine Bewerbungsunterlagen schicken.", isCorrect:true},
            {answer:"sie habe die Bewerbungsunterlagen verschickt.", isCorrect:false},
        ]
    },{
        question:"Lesen Sie unbedingt vor der Reise die Visabestimmungen.",
        answersList: [
            {answer:"Du solltest das auf der Reise lesen.", isCorrect:false},
            {answer:"Du könntest das auch noch später erledigen.", isCorrect:false},
            {answer:"Du sollst das schon vor der Einreise tun.", isCorrect:true},
        ]
    },{
        question:"Wäre es nicht wichtiger, dass Sie genügend Freizeit haben?",
        answersList: [
            {answer:"Ja, Freizeit ist mir am liebsten.", isCorrect:true},
            {answer:"Nein, denn Freizeit ist am wichtigsten.", isCorrect:false},
            {answer:"Hm, das glaubt mir sowieso niemand.", isCorrect:false},
        ]
    },{
        question:"Worüber machen Sie sich Gedanken?",
        answersList: [
            {answer:"Ich dachte an die Vergangenheit.", isCorrect:false},
            {answer:"Darüber, wie die Zukunft sein wird.", isCorrect:true},
            {answer:"Über die Zukunft werden wir nachdenken.", isCorrect:false},
        ]
    },{
        question:"Du kommst schon wieder zu spät.",
        answersList: [
            {answer:"Na ja! Ich habe sehr gut geschlafen.", isCorrect:false},
            {answer:"Ja, ich habe die ganze Nacht durchgeschlafen.", isCorrect:false},
            {answer:"Tut mir Leid, aber ich habe mich verschlafen.", isCorrect:true},
        ]
    },{
        question:"Planung und Gliederung eines Vortrags:",
        answersList: [
            {answer:"Was gehört in die Einleitung, in den Hauptteil und was in den Schluss?", isCorrect:true},
            {answer:"Beginnen Sie den Hauptteil mit einer Zusammenfassung.", isCorrect:false},
            {answer:"Gehen Sie am Ende auf die unwichtigsten Aspekte ein.", isCorrect:false},
        ]
    },{
        question:"Ihren Eltern zuliebe hat sie ein Studium begonnen.",
        answersList: [
            {answer:"Das bedeutet, dass ihre Eltern sie lieben.", isCorrect:false},
            {answer:"Du meinst, aus Liebe zu ihren Eltern?", isCorrect:true},
            {answer:"Ja! Weil ihre Eltern das Studienfach lieben.", isCorrect:false},
        ]
    },{
        question:"Tipps für eine Diskussion:",
        answersList: [
            {answer:"Wiederholen Sie die Argumente Ihres Gesprächspartners.", isCorrect:false},
            {answer:"Kommen Sie am Anfang zu einer Entscheidung.", isCorrect:false},
            {answer:"Gehen Sie auf die Argumente Ihres Gesprächspartners ein.", isCorrect:true},
        ]
    },{
        question:"Ob man die Prüfung bei Nichtbestehen wiederholen kann,",
        answersList: [
            {answer:"können Sie in der Prüfungsordnung nachlesen.", isCorrect:true},
            {answer:"stand früher in der Hausordnung.", isCorrect:false},
            {answer:"ist dem Vorlesungsverzeichnis zu entnehmen.", isCorrect:false},
        ]
    },
    

    {
        question:"In der Prüfung kommt es darauf an, dass",
        answersList: [
            {answer:"sie jederzeit Ihre Ruhe bewahren.", isCorrect:true},
            {answer:"sie allen Ihre Stärke beweisen.", isCorrect:false},
            {answer:"sie so schnell wie möglich fertig werden.", isCorrect:false},
        ]
    },{
        question:"Ihr Argument hat mich nicht überzeugt,",
        answersList: [
            {answer:"dem stimme ich voll und ganz zu.", isCorrect:false},
            {answer:"und zwar aus folgendem Grund.", isCorrect:true},
            {answer:"denn Sie haben keine Ahnung.", isCorrect:false},
        ]
    },{
        question:"Können Sie mir ein Laptop zur Verfügung stellen.",
        answersList: [
            {answer:"Leider können wir das nicht herstellen.", isCorrect:false},
            {answer:"Das kann ich mir gar nicht vorstellen.", isCorrect:false},
            {answer:"Ja, das können wir Ihnen gern bereitstellen.", isCorrect:true},
        ]
    },{
        question:"Wer nicht imstande war, die Fragen zu beantworten,",
        answersList: [
            {answer:"konnte die Prüfung nicht bestehen.", isCorrect:true},
            {answer:"musste die Prüfung vorbereiten.", isCorrect:false},
            {answer:"hat die mündliche Prüfung verschoben.", isCorrect:false},
        ]
    },{
        question:"Die Prüfenden sind dazu verpflichtet",
        answersList: [
            {answer:"die Prüfungskandidaten bei der Prüfung geheim zu halten.", isCorrect:false},
            {answer:"die Ergebnisse der Prüfung zu verheimlichen.", isCorrect:false},
            {answer:"die Ergebnisse bis zum Ende der Prüfung geheim zu halten.", isCorrect:true},
        ]
    },{
        question:"Leider ist sie schlecht auf die Prüfung vorbereitet.",
        answersList: [
            {answer:"Trotzdem lässt sie es darauf ankommen.", isCorrect:true},
            {answer:"Denn sie möchte keine Risiken eingehen.", isCorrect:false},
            {answer:"Weil sie es nicht ernst damit meint.", isCorrect:false},
        ]
    },{
        question:"Welche Hilfsmittel darf man in der Prüfung benutzen?",
        answersList: [
            {answer:"Medikamente sind nicht zu empfehlen.", isCorrect:false},
            {answer:"Einsprachige Wörterbücher sind erlaubt.", isCorrect:true},
            {answer:"Wörterbücher dürfen nicht verwendet werden.", isCorrect:false},
        ]
    },{
        question:"Der Studienordnung entsprechend",
        answersList: [
            {answer:"absolvieren Sie die Aufnahmeprüfung.", isCorrect:false},
            {answer:"können Sie eine Zulassungsprüfung absolvieren.", isCorrect:false},
            {answer:"müssen Sie eine Aufnahmeprüfung absolvieren.", isCorrect:true},
        ]
    },{
        question:"Bei der schriftlichen Prüfung",
        answersList: [
            {answer:"bearbeiten Sie mehrere Aufgaben.", isCorrect:true},
            {answer:"müssen Sie einen Vortrag halten.", isCorrect:false},
            {answer:"verfassen Sie eine Seminararbeit.", isCorrect:false},
        ]
    },{
        question:"Die Dozentin bat die Studierenden",
        answersList: [
            {answer:"sich vor dem Studium vorzustellen.", isCorrect:false},
            {answer:"eine falsche Vorstellung von etwas zu haben. ", isCorrect:false},
            {answer:"sich eine bestimmte Situation vorzustellen.", isCorrect:true},
        ]
    },

].sort(() => Math.random() - 0.5);

export default QuestionsList;