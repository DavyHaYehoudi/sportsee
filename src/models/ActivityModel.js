class ActivityModel {
    constructor(data) {
      this.data = data;
    }
  
    // Méthode pour formater les données du graphique à barres
    formatBarGraphData() {
      return this.data?.sessions.map(session => ({
        day: session.day,
        kilogram: session.kilogram,
        calories: session.calories,
      }));
    }
  
    // Fonction pour extraire le jour de la date
    extractDay(dateString) {
        return dateString.substring(8, 10);
      }
  }
  
  export default ActivityModel;
  