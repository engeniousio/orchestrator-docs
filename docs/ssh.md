---
id: ssh
title: Set up SSH keys
---

import useBaseUrl from "@docusaurus/useBaseUrl";

## Step 1: Create the RSA key pair

The first step is to create the key pair on the client machine (there is a good chance that this will just be your computer):

```
ssh-keygen -t rsa
```

:::important
Use default id_rsa name for key and empty passphrase!
:::

Once you have entered the Gen Key command, you will get a few more questions:

```
Enter file in which to save the key (/Users/demouser/.ssh/id_rsa):
```

You can press enter here, saving the file to the user home (in this case, my example user is called demouser).

```
Enter passphrase (empty for no passphrase):
```

Output:

```
Generating public/private rsa key pair.
Enter file in which to save the key (/Users/demouser/.ssh/id_rsa):
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /Users/demouser/.ssh/id_rsa.
Your public key has been saved in /Users/demouser/.ssh/id_rsa.pub.
The key fingerprint is:
4a:dd:0a:c6:35:4e:3f:ed:27:38:8c:74:44:4d:93:67 demouser@a
The key's randomart image is:
+--[ RSA 2048]----+
|          .oo.   |
|         .  o.E  |
|        + .  o   |
|     . = = .     |
|      = S = .    |
|     o + = +     |
|      . o + o .  |
|           . o   |
|                 |
+-----------------+
```

The public key is now located in /Users/demouser/.ssh/id_rsa.pub. The private key (identification) is now located in /Users/demouser/.ssh/id_rsa.

## Step 2: Copy the public key

Once the key pair is generated, it’s time to place the public key on the server that we want to use.
You can copy the public key into the new machine’s authorized_keys file with the command:

```
cp ~/.ssh/id_rsa.pub ~/.ssh/authorized_keys
```

Alternatively, you can add in the keys using SSH (if authorized keys exists):

```
cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys
```

## Step 3: Try out your login

Make sure that remote login is allowed on your machine:

<img alt="ssh on" src={useBaseUrl("img/ssh-min.png")} />

```
ssh username@ip-address
```

You may see something like:

```
The authenticity of host '196.21.150.20 (196.21.150.20)' can't be established.
RSA key fingerprint is b1:2d:33:67:ce:35:4d:5f:f3:a8:cd:c0:c4:48:86:12.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added '196.21.150.20' (RSA) to the list of known hosts.
demouser@196.21.150.20's password:
```

This message helps us to make sure that we haven’t added extra keys that you weren’t expecting.
Now you can go ahead and log into your user profile and you will not be prompted for a password. However, if you set a passphrase when creating your SSH key, you will be asked to enter the passphrase at that time (and whenever else you log in in the future).

## Step 4: Connect nodes together

Sift will use nodes to connect to them and send build and results between Main node and execution nodes. So Main node must be able to connect to nodes without password, and every node have to be able to connect to Main node in the same way.

Just repeat steps 1 - 3 for every nodes.