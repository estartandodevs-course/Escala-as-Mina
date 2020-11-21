# from selenium import webdriver
# from selenium.webdriver.common.keys import Keys

# driver = webdriver.Chrome(
#     executable_path="C:\\Users\\rodri\\Documents\\Projects\\scrappasmina\\chromedriver.exe")
# # instaciando o driver, não sei pq não ta funcionando com path relativo
# PATH_BASE = "https://www.cbf.com.br/futebol-brasileiro/competicoes/"
# championship = "campeonato-brasileiro-feminino-a1"
# driver.get(PATH_BASE+championship)

# Sepa usar selenium é ruim

import requests
from bs4 import BeautifulSoup


class TagError(Exception):
    pass


def get_href(tag):
    return tag.a['href']


def get_game_number(tag):
    """Extracts game number from span <class="partida-desc"> tag. Will throw an error if tag has no a child
    """
    if tag.a:
        raise TagError("Wrong tag used, this tag has to have an 'a' child")

    untreated_number = tag.text.lower().split("jogo:")[-1].strip()
    treated_number = ""

    if untreated_number.isnumeric():
        treated_number = untreated_number

    else:
        for char in untreated_number:
            if char.isnumeric():
                treated_number += char
            else:
                break

    return treated_number


def make_games_dict(all_matches):
    """Returns a dictionary with game_number: url
    """
    matches_number = [get_game_number(match)
                      for match in all_matches if "2020" in match.text]
    links = [get_href(link) for link in all_matches if link.a]
    dict_matches = {match: link for match in matches_number for link in links}
    return dict_matches


PATH_BASE = "https://www.cbf.com.br/futebol-brasileiro/competicoes/"
# se quiser outro campeonato muda essa string
championship = "campeonato-brasileiro-feminino-a1"

html = requests.get(PATH_BASE+championship).content  # pega o html da pagina
soup = BeautifulSoup(html, 'html.parser')  # cria um objeto que lida com o html


all_matches = soup.find_all("span", class_="partida-desc")
dict_matches = make_games_dict(all_matches)
