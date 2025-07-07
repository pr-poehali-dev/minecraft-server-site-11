import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [onlineCount, setOnlineCount] = useState(247);
  const [isGlowing, setIsGlowing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setOnlineCount((prev) => prev + Math.floor(Math.random() * 3) - 1);
      setIsGlowing(true);
      setTimeout(() => setIsGlowing(false), 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gaming-gradient text-foreground dark">
      {/* Background Pattern */}
      <div className="fixed inset-0 bg-[url('/img/50e1af1f-7ca6-42c4-a189-2911ee32f9fa.jpg')] bg-cover bg-center opacity-10"></div>

      {/* Header */}
      <header className="relative z-10 p-6 border-b border-border">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center neon-border">
              <Icon name="Zap" className="w-6 h-6 text-primary glow-effect" />
            </div>
            <div>
              <h1 className="text-2xl font-orbitron font-bold text-primary glow-effect">
                ЗЕВС ПВП
              </h1>
              <p className="text-sm text-muted-foreground">Сервер выживания</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Badge
              variant="secondary"
              className="bg-primary/20 text-primary border-primary"
            >
              <div
                className={`w-2 h-2 rounded-full bg-primary mr-2 ${isGlowing ? "animate-pulse-glow" : ""}`}
              ></div>
              {onlineCount} онлайн
            </Badge>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-orbitron">
              ИГРАТЬ
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-6xl font-orbitron font-bold mb-6 text-primary glow-effect animate-float">
            ПВП СЕРВЕР
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Эпические битвы, могучие кланы и бесконечные приключения в мире
            выживания
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-orbitron text-lg px-8 py-3"
            >
              <Icon name="Play" className="w-5 h-5 mr-2" />
              НАЧАТЬ ИГРУ
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 font-orbitron text-lg px-8 py-3"
            >
              <Icon name="Users" className="w-5 h-5 mr-2" />
              ВЫБРАТЬ КЛАН
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="bg-card/50 border-border backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-orbitron text-muted-foreground">
                  ИГРОКОВ ОНЛАЙН
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary glow-effect">
                  {onlineCount}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  +12 за последний час
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-orbitron text-muted-foreground">
                  АКТИВНЫХ КЛАНОВ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-accent">24</div>
                <p className="text-xs text-muted-foreground mt-1">
                  Война за территории
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-orbitron text-muted-foreground">
                  ПВП АРЕНА
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary glow-effect">
                  ⚔️
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Битвы каждый час
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-orbitron text-muted-foreground">
                  АПТАЙМ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-400">99.9%</div>
                <p className="text-xs text-muted-foreground mt-1">
                  Стабильность
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-16 px-6">
        <div className="container mx-auto">
          <h3 className="text-3xl font-orbitron font-bold text-center mb-12 text-primary glow-effect">
            ОСОБЕННОСТИ СЕРВЕРА
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card/50 border-border backdrop-blur-sm hover:bg-card/70 transition-all duration-300 neon-border">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Swords" className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-orbitron text-primary">
                  ПВП СРАЖЕНИЯ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Эпические битвы между кланами за контроль над территориями.
                  Сражайтесь за ресурсы и славу!
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border backdrop-blur-sm hover:bg-card/70 transition-all duration-300 neon-border">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Shield" className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="font-orbitron text-accent">
                  СИСТЕМЫ КЛАНОВ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Создавайте альянсы, стройте крепости и защищайте свои земли.
                  Война или мир - выбор за вами!
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border backdrop-blur-sm hover:bg-card/70 transition-all duration-300 neon-border">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Trophy" className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-orbitron text-primary">
                  РЕЙТИНГИ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Зарабатывайте очки славы в боях и поднимайтесь в рейтинге.
                  Станьте легендой сервера!
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section className="relative z-10 py-16 px-6">
        <div className="container mx-auto">
          <h3 className="text-3xl font-orbitron font-bold text-center mb-12 text-primary glow-effect">
            ПРАВИЛА СЕРВЕРА
          </h3>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-card/50 border-border backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-orbitron text-primary">
                  ⚖️ ОСНОВНЫЕ ПРАВИЛА
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Badge
                    variant="outline"
                    className="border-primary text-primary"
                  >
                    1
                  </Badge>
                  <p>Запрещено использование читов и модификаций</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge
                    variant="outline"
                    className="border-primary text-primary"
                  >
                    2
                  </Badge>
                  <p>Уважайте других игроков в чате</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge
                    variant="outline"
                    className="border-primary text-primary"
                  >
                    3
                  </Badge>
                  <p>Запрещено создание лагающих конструкций</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge
                    variant="outline"
                    className="border-primary text-primary"
                  >
                    4
                  </Badge>
                  <p>Гриф разрешен только в PvP зонах</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Badge
                    variant="outline"
                    className="border-primary text-primary"
                  >
                    5
                  </Badge>
                  <p>Максимальный размер клана - 10 человек</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="relative z-10 py-16 px-6">
        <div className="container mx-auto">
          <h3 className="text-3xl font-orbitron font-bold text-center mb-12 text-accent glow-effect">
            💎 ПОДДЕРЖКА СЕРВЕРА
          </h3>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-card/50 border-accent backdrop-blur-sm">
              <CardHeader className="text-center">
                <CardTitle className="font-orbitron text-accent text-2xl">
                  ПОМОГИТЕ СЕРВЕРУ РАЗВИВАТЬСЯ
                </CardTitle>
                <CardDescription className="text-lg">
                  Ваша поддержка помогает нам улучшать сервер и добавлять новые
                  функции
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">
                    Переводы принимаются на номер:
                  </p>
                  <div className="bg-accent/20 p-4 rounded-lg border border-accent">
                    <p className="text-2xl font-orbitron text-accent font-bold">
                      +7 918 889 25 25
                    </p>
                  </div>
                </div>

                <Separator className="bg-border" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="bg-background/50 border-border">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-orbitron">
                        БАЗОВАЯ ПОДДЕРЖКА
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-primary mb-2">
                        100₽
                      </div>
                      <ul className="text-sm space-y-1">
                        <li>• Благодарность в чате</li>
                        <li>• Цветной ник</li>
                        <li>• Приоритет в очереди</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-background/50 border-accent">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-orbitron text-accent">
                        ПРЕМИУМ
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-accent mb-2">
                        500₽
                      </div>
                      <ul className="text-sm space-y-1">
                        <li>• Все из базовой</li>
                        <li>• Дополнительные слоты</li>
                        <li>• Эксклюзивные предметы</li>
                        <li>• Доступ к VIP зонам</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-background/50 border-border">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-orbitron">
                        ЛЕГЕНДА
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-primary mb-2">
                        1000₽
                      </div>
                      <ul className="text-sm space-y-1">
                        <li>• Все из премиум</li>
                        <li>• Личный приват</li>
                        <li>• Кастомные команды</li>
                        <li>• Особый статус</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 border-t border-border">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
              <Icon name="Zap" className="w-4 h-4 text-primary" />
            </div>
            <h4 className="text-xl font-orbitron font-bold text-primary">
              ЗЕВС ПВП
            </h4>
          </div>
          <p className="text-muted-foreground mb-4">
            Лучший сервер выживания с PvP и кланами
          </p>
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="sm">
              <Icon name="MessageCircle" className="w-4 h-4 mr-2" />
              Discord
            </Button>
            <Button variant="ghost" size="sm">
              <Icon name="Send" className="w-4 h-4 mr-2" />
              Telegram
            </Button>
            <Button variant="ghost" size="sm">
              <Icon name="Youtube" className="w-4 h-4 mr-2" />
              YouTube
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
