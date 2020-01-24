<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use App\Entity\Salon;

class SalonFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $salon = new Salon();
        $salon->setNom('Raie-Création Labège');
        $salon->setAdresse('21 rue de Labège');
        $manager->persist($salon);
        $manager->flush();

        $salon = new Salon();
        $salon->setNom('Raie-Création New-York');
        $salon->setAdresse('13 rue de New York');
        $manager->persist($salon);
        $manager->flush();

        $salon = new Salon();
        $salon->setNom('Raie-Création Paris');
        $salon->setAdresse('45 rue de Paris');
        $manager->persist($salon);
        $manager->flush();

        $salon = new Salon();
        $salon->setNom('Raie-Création Toulouse');
        $salon->setAdresse('98 Boulevard de Toulouse');
        $manager->persist($salon);
        $manager->flush();
    }
}
