
    CREATE TABLE equipos (
        id int(11) NOT NULL,
        id_usuario_creador int(11) NOT NULL,
        nombre varchar(191) NOT NULL,
        logo varchar(191) NOT NULL,
        descripcion varchar(191) NOT NULL,
        created_at datetime(3) NOT NULL DEFAULT current_timestamp(3)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

      INSERT INTO equipos (id, id_usuario_creador, nombre, logo, descripcion, created_at) VALUES

      (2,1,'joe','barsa.png','w','Thu Apr 18 2024 08:43:39 GMT-0400 (hora de Venezuela)')
     ,(3,1,'aswd','barsa.png','asd','Thu Apr 18 2024 08:47:12 GMT-0400 (hora de Venezuela)')
     ,(5,2,'rwerwer','image3.png','erwerw','Tue Apr 23 2024 14:37:36 GMT-0400 (hora de Venezuela)')
     

      CREATE TABLE iniciosdesesion (
        id int(11) NOT NULL,
        id_usuario int(11) NOT NULL,
        created_at datetime(3) NOT NULL DEFAULT current_timestamp(3)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    
    INSERT INTO iniciosdesesion (id, id_usuario, created_at) VALUES
    (1,1,'Thu Apr 18 2024 08:34:55 GMT-0400 (hora de Venezuela)')
   ,(2,2,'Tue Apr 23 2024 13:47:10 GMT-0400 (hora de Venezuela)')
   ,(3,3,'Tue Apr 23 2024 15:12:55 GMT-0400 (hora de Venezuela)')
   ,(4,4,'Tue Apr 23 2024 15:14:31 GMT-0400 (hora de Venezuela)')
   ,(5,3,'Tue Apr 23 2024 15:17:25 GMT-0400 (hora de Venezuela)')
   ,(6,3,'Tue Apr 23 2024 15:29:19 GMT-0400 (hora de Venezuela)')
   ,(7,1,'Tue Apr 23 2024 15:29:58 GMT-0400 (hora de Venezuela)')
   ,(8,3,'Tue Apr 23 2024 15:33:20 GMT-0400 (hora de Venezuela)')
   ,(9,4,'Tue Apr 23 2024 15:35:27 GMT-0400 (hora de Venezuela)')
   ,(10,4,'Tue Apr 23 2024 15:36:56 GMT-0400 (hora de Venezuela)')
   ,(11,4,'Tue Apr 23 2024 15:46:47 GMT-0400 (hora de Venezuela)')
   ,(12,3,'Tue Apr 23 2024 15:47:01 GMT-0400 (hora de Venezuela)')
   ,(13,3,'Tue Apr 23 2024 15:57:44 GMT-0400 (hora de Venezuela)')
   ,(14,4,'Tue Apr 23 2024 15:57:52 GMT-0400 (hora de Venezuela)')
   ,(15,3,'Tue Apr 23 2024 16:19:52 GMT-0400 (hora de Venezuela)')
   ,(16,4,'Tue Apr 23 2024 16:33:10 GMT-0400 (hora de Venezuela)')
   ,(17,3,'Tue Apr 23 2024 16:47:45 GMT-0400 (hora de Venezuela)')
   
      
      CREATE TABLE jugadores (
          id int(11) NOT NULL,
          id_usuario_creador int(11) NOT NULL,
          id_equipo int(11) NOT NULL,
          nombre varchar(191) NOT NULL,
          apellido varchar(191) NOT NULL,
          posicion varchar(191) NOT NULL,
          fechaDeNacimiento datetime(3) NOT NULL,
          descripcion varchar(191) NOT NULL,
          created_at datetime(3) NOT NULL DEFAULT current_timestamp(3)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

        INSERT INTO jugadores (id, id_usuario_creador, id_equipo, nombre, apellido, posicion, fechaDeNacimiento, descripcion, created_at) VALUES
    (2,1,3,'af','fsdf','sdfsd','Mon Apr 15 2024 20:00:00 GMT-0400 (hora de Venezuela)','sdf','Thu Apr 18 2024 08:55:00 GMT-0400 (hora de Venezuela)')
   
        
    CREATE TABLE usuarios (
        id int(11) NOT NULL,
        username varchar(191) NOT NULL,
        email varchar(191) NOT NULL,
        password varchar(191) NOT NULL,
        tipo_usuario varchar(191) NOT NULL,
        created_at datetime(3) NOT NULL DEFAULT current_timestamp(3)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci; 

      INSERT INTO usuarios (id, username, email, password, tipo_usuario, created_at) VALUES
      (1,'joe','joedodaniljr123@gmail.com','$2b$10$iOaTaKleq86TSGi6ZDFhwOWbqGwRWuXcFGjzK41O7BkYMEoqZ.rdO','admin','Thu Apr 18 2024 08:34:52 GMT-0400 (hora de Venezuela)')
     ,(2,'joemo','joedodaniljr1234@gmail.com','$2b$10$BKa.mRY/NRm3lhyKH4T5sufRdMY8EF13qoxlC5QpX3fXsh3v4Givq','admin','Tue Apr 23 2024 13:47:04 GMT-0400 (hora de Venezuela)')
     ,(3,'user','joe@gmail.com','$2b$10$etzYdcYW2W.JqDd4/1w9eO8hfQKh0ubJ0I1u7oaIJr3QoDK/Ivf/K','admin','Tue Apr 23 2024 15:12:51 GMT-0400 (hora de Venezuela)')
     ,(4,'user1','user@gmail.com','$2b$10$8VuanU/5kJ25m3Qki3hWHuZNQbu5Lahaw28RR35XVXz.GCrarARSK','user','Tue Apr 23 2024 15:14:05 GMT-0400 (hora de Venezuela)')
     



