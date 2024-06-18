# Étude de faisabilité

## NestJs

- **_Fonctionnement_** : NestJS est un framework pour le développement de backend Node.js. Il utilise TypeScript et est inspiré par Angular, ce qui facilite la transition pour les développeurs familiers avec Angular. Il se base sur Express.js ou Fastify pour la gestion des requêtes HTTP et offre une architecture modulaire et extensible.

- **_Principes de base_** : Un module encapsule un ensemble de fonctionnalités connexes. Par défaut, une application NestJS contient un module racine, généralement nommé AppModule.
  Contrôleurs : Les contrôleurs gèrent les requêtes et envoient les réponses au client. Ils sont responsables de la gestion des routes et des points de terminaison.
  Services : Les services contiennent la logique métier et sont utilisés par les contrôleurs pour effectuer des tâches spécifiques.
  Décorateurs : Les décorateurs sont utilisés pour annoter les classes et les méthodes, et pour définir des métadonnées pour NestJS.

- **_Installation_**\
  Installation de NestJS CLI : `npm install -g @nestjs/cli`\
  Création d'un nouveau projet : `nest new mon-projet`

- **_Architecture modulaire_** : permet de structurer les applications de manière organisée et scalable en encapsulant les fonctionnalités dans des modules. Chaque module contient des contrôleurs, services, et entités spécifiques, favorisant la réutilisabilité, la testabilité, et la scalabilité. Cette approche facilite la gestion des grandes applications, permet d'ajouter de nouvelles fonctionnalités sans affecter le reste de l'application, et améliore la maintenabilité et la qualité du code grâce à une encapsulation claire des détails d'implémentation.

## GraphQL

- **_Avantages_**\
   Type Safety et Validation : NestJS, couplé avec GraphQL, offre une sécurité de type forte et une validation automatique, ce qui réduit les erreurs de type et améliore la robustesse de l'application.\
   Flexible et Puissant : GraphQL permet aux clients de demander exactement les données dont ils ont besoin, réduisant ainsi les surcharges de réseau et améliorant l'efficacité.\
   Écosystème NestJS : NestJS fournit des outils et des fonctionnalités intégrées pour le développement de GraphQL, comme les decorators, les modules, et l'injection de dépendances, simplifiant la configuration et la gestion des API.\
   Documentation Automatique : Les schémas GraphQL peuvent être utilisés pour générer automatiquement la documentation de l'API, facilitant la compréhension et l'utilisation pour les développeurs.

- **_Inconvénients_**\
   Courbe d'Apprentissage : La combinaison de NestJS et GraphQL peut avoir une courbe d'apprentissage plus raide pour les développeurs non familiers avec ces technologies, nécessitant une compréhension approfondie de concepts tels que les schémas, les résolveurs, et les mutations.\
   Complexité : La mise en place de GraphQL peut être plus complexe par rapport à REST, en particulier pour les projets simples où cette flexibilité supplémentaire n'est pas nécessaire.\
   Problèmes de Performance : Si les requêtes ne sont pas correctement optimisées, elles peuvent entraîner des problèmes de performance en raison de la nature flexible et potentiellement lourde des requêtes GraphQL.
  Sécurité : La flexibilité de GraphQL peut introduire des vulnérabilités si les requêtes ne sont pas correctement validées et sécurisées, nécessitant des efforts supplémentaires pour assurer la sécurité de l'API.
 
