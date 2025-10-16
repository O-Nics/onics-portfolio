# Vidéos des projets

Placez vos vidéos de démo de projets dans ce dossier, organisées par projet.

## Structure recommandée

```
videos/projects/
├── nom-du-projet-1/
│   ├── demo.mp4
│   └── tutorial.mp4
├── nom-du-projet-2/
│   └── showcase.mp4
```

## Formats recommandés

- **MP4 (H.264)** : Format le plus compatible
- **WebM** : Format moderne, léger (alternative)

## Optimisation

- Résolution recommandée : 1920x1080 max (Full HD)
- Durée : 30-60 secondes pour les démos
- Compression : Utilisez HandBrake ou FFmpeg
- Taille cible : ~5MB max par vidéo

## Exemple de compression avec FFmpeg

```bash
ffmpeg -i input.mp4 -c:v libx264 -crf 28 -preset slow -c:a aac -b:a 128k output.mp4
```
